import React from "react";

const ReviewItem = ({ review }) => {
  return (
    <div className="card my-3 w-100">
      <div className="row m-0">
        <h5 className="card-header w-100">{review.author}</h5>
        <div className="card-body mx-auto">
          <blockquote className="blockquote">{review.content}</blockquote>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
