import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '8d302edd36934c0d8a015544a6c44b2d';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    fetch(URL)
    	.then(function(response) {
    		if (response.status >= 400) {
    			throw new Error("Bad response from server");
    		}
    		return response.json();
    	})
    	.then(function(reviews) {
    		this.setState({
          reviews: reviews.results
        })
    	});
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <button onClick={this.handleClick}>See All Reviews</button>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
