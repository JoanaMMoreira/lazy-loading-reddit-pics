import { fetchCommentsSuccess } from "./redux/actions";
import { BASE_URL } from "./constants";

const fetchComments = (id) => {
  return (dispatch) => {
    fetch(`${BASE_URL}/comments/${id}.json?sort=top`)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          throw response.error;
        }

        const comments = response[1].data.children.map(({ data }) => data);

        dispatch(fetchCommentsSuccess(comments));
        return comments;
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default fetchComments;
