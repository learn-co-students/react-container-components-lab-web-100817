// Code MovieReviews Here
import React from 'react'
import Review from './Review'

class MovieReviews extends React.Component {

  render() {

    const reviews = this.props.reviews.map(review => <Review review= {review} />)

    return (
      <div className="review-list">
        {reviews}
      </div>
    )
  }
}


export default MovieReviews
