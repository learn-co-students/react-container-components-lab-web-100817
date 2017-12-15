import React from 'react'

const Review = (props) => {
  return (
    <div>
      <h2>{props.display_title}</h2>
      <p>{props.review.headline}</p>
    </div>
  )
}

export default Review
