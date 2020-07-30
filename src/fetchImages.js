import {
  fetchImagesPending,
  fetchImagesSuccess,
  fetchImagesError,
} from "./redux/actions";
import { BASE_URL } from "./constants";

const fetchImages = (fetchNext = "") => {
  return (dispatch) => {
    dispatch(fetchImagesPending());
    fetch(`${BASE_URL}/top.json?t=all&after=${fetchNext}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          throw response.error;
        }

        const after = response.data.after;
        const posts = response.data.children.map(({ data }) => data);

        dispatch(fetchImagesSuccess(posts, after));
        return response;
      })
      .catch((error) => {
        dispatch(fetchImagesError(error));
      });
  };
};

export default fetchImages;
