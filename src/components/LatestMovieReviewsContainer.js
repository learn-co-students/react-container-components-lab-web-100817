import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '97eb60d840d042dbb12ef492a8abe754';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(URL).then(response => response.json())
    .then((data => this.setState({reviews: data.results
    })
    ));

  }

  render(){
    return (
    <div className="latest-movie-reviews">
    <MovieReviews reviews={this.state.reviews}/>

    </div>
    )
  }

}

export default LatestMovieReviewsContainer;
