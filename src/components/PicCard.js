import React from "react";
import { convertDate, formatNumber, isImageURL } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const displayAwards = (awards) => {
  return awards.map(({ id, count, resized_icons }) => (
    <span key={id} className="Awards">
      <img src={resized_icons[0].url} alt="award" /> {count > 1 && count}
    </span>
  ));
};

const displayTopComments = (comments) => (
  <div className="Comments-container">
    {comments.map(({ id, author, body, created }) => (
      <div key={id} className="Pic-comments">
        <p className="Post-info">
          {author} {convertDate(new Date(created * 1000))}
        </p>
        <p className="Pic-comments-body">{body}</p>
      </div>
    ))}
  </div>
);

const PicCard = ({
  url,
  title,
  author,
  date,
  awards,
  upVotes,
  comments,
  thumbnail,
  postComments,
}) => {
  return (
    <div className="Pic-card">
      {!isImageURL(url) && (
        <a
          href={url}
          className="Post-thumbnail"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={thumbnail} alt={title} />
        </a>
      )}
      <p className="Post-info">
        Posted by {author} {convertDate(new Date(date * 1000))}
        {displayAwards(awards)}
      </p>
      <h3>{title}</h3>
      {isImageURL(url) ? (
        <img className="Post-img" src={url} alt={title} />
      ) : (
        <a href={url} rel="noopener noreferrer" target="_blank">
          {url}
        </a>
      )}
      <div className="Post-footer">
        <span>
          <FontAwesomeIcon icon={faArrowUp} className="Post-icon" />{" "}
          {formatNumber(upVotes)}
        </span>
        <span>
          <FontAwesomeIcon icon={faCommentAlt} className="Post-icon" />
          {formatNumber(comments)} Comments
        </span>
      </div>
      {postComments && displayTopComments(postComments)}
    </div>
  );
};

export default PicCard;
