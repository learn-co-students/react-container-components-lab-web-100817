// Code MovieReviews Here
import React from 'react'

const Review = (review) => {
  return (
    <div className="review">
      <h1>{review.display_title}</h1>
      <p>by {review.byline}</p>
      <h5>Rated: {review.mpaa_rating}</h5>
      <h3>{review.headline}</h3>
      <p>{review.summary_short}</p>
    </div>
  )
}

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.reviews.map(Review)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
