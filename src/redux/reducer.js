import {
  FETCH_IMAGES_PENDING,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR,
  FETCH_COMMENTS_SUCCESS,
} from "./actions";

const initialState = {
  loading: false,
  images: [],
  comments: [],
  error: null,
  after: "",
};

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_IMAGES_SUCCESS:
      const currentImages = state.images;
      const newImages = action.images;

      const newImagesState = [...currentImages, ...newImages];

      return {
        ...state,
        loading: false,
        after: action.after,
        images: newImagesState,
      };
    case FETCH_IMAGES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.comments,
      };
    default:
      return state;
  }
};

export const getImages = (state) => state.images;
export const getImagesPending = (state) => state.loading;
export const getImagesError = (state) => state.error;
export const getImagesAfter = (state) => state.after;
export const getComments = (state) => state.comments;
