import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component{

  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    fetch(URL).then(res=>res.json()).then(json =>this.setState({reviews: json.results}))
  }

  render(){
    const renderReviews = this.state.reviews.map((movieReview,index) =>{
    return  <MovieReviews reviews={movieReview} key={index}/>
    });
    return(
      <div className="latest-movie-reviews">
        <div className="review-list">
          {renderReviews}
        </div>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
