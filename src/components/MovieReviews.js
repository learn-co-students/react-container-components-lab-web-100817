// Code MovieReviews Here
import React from 'react';
import PropTypes from 'prop-types';

const MovieReviews = (props) => {
  // how come brackets make the test fail but parentheses work?

  return <div className="review-list">
    {props.reviews.map(review =>
    <p className="review"> {review.headline}</p>)}
    </div>
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
