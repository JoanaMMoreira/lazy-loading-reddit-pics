export const FETCH_IMAGES_PENDING = "FETCH_IMAGES_PENDING";
export const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS";
export const FETCH_IMAGES_ERROR = "FETCH_IMAGES_ERROR";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";

export const fetchImagesPending = () => {
  return {
    type: FETCH_IMAGES_PENDING,
  };
};

export const fetchImagesSuccess = (images, after) => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    images: images,
    after: after,
  };
};

export const fetchImagesError = (error) => {
  return {
    type: FETCH_IMAGES_ERROR,
    error: error,
  };
};

export const fetchCommentsSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    comments: comments,
  };
};
