import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PicCard from "./PicCard";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import { getComments } from "../redux/reducer";
import fetchCommentsAction from "../fetchComments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const PicCardPage = ({
  id,
  url,
  title,
  author,
  date,
  awards,
  upVotes,
  comments,
  thumbnail,
  postComments,
  fetchComments,
}) => {
  useEffect(() => {
    fetchComments(id);
  }, []);

  return (
    <>
      <Link to="/">
        <FontAwesomeIcon icon={faLongArrowAltLeft} className="Go-back" />
      </Link>
      <PicCard
        url={url}
        title={title}
        author={author}
        date={date}
        awards={awards}
        upVotes={upVotes}
        comments={comments}
        thumbnail={thumbnail}
        postComments={postComments}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  postComments: getComments(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchComments: fetchCommentsAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PicCardPage);
