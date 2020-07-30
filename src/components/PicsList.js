import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  BrowserRouter as Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import debounce from "lodash.debounce";
import fetchImagesAction from "../fetchImages";
import {
  getImagesError,
  getImages,
  getImagesPending,
  getImagesAfter,
} from "../redux/reducer";
import PicCard from "./PicCard";
import PicCardPage from "./PicCardPage";
import LoadingSpinner from "./LoadingSpinner";

const PicsList = ({ error, images, loading, fetchImages, after }) => {
  useEffect(() => {
    fetchImages();
  }, []);

  const location = useLocation();

  window.onscroll = debounce(() => {
    if (error || loading || location.pathname !== "/") {
      return;
    }
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchImages(after);
    }
  }, 100);

  return (
    <div className="Flex-container">
      <div className="Pics-container">
        {images
          .filter((image) => !image.over_18)
          .map(
            ({
              id,
              url,
              title,
              author,
              created,
              all_awardings,
              ups,
              num_comments,
              thumbnail,
            }) => {
              const picCardProps = {
                url,
                title,
                author,
                date: created,
                awards: all_awardings,
                upVotes: ups,
                comments: num_comments,
                thumbnail,
              };

              return (
                <div key={id}>
                  <Route exact path={"/"}>
                    <Link to={`/${id}`}>
                      <PicCard {...picCardProps} />
                    </Link>
                  </Route>
                  <Route exact path={`/${id}`}>
                    <PicCardPage {...picCardProps} id={id} />
                  </Route>
                </div>
              );
            }
          )}

        {error && <p>Something went wrong. Please try again.</p>}
        {loading && <LoadingSpinner />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: getImagesError(state),
  images: getImages(state),
  loading: getImagesPending(state),
  after: getImagesAfter(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchImages: fetchImagesAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PicsList);
