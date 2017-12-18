// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) =>{
  if(reviews !== undefined){
    const {display_title, mpaa_rating, critics_pick, byline, headline,summary_short,link} = reviews;
     return(

    <div
      key={headline}
      className="review"
    >
      <header>
        <a
          className="review-link"

          href={(link=== undefined) ? "#" : link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
     )}
     return null
}
MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
