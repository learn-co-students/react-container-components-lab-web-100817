// Code SearchableMovieReviewsContainer Here

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

//


class SearchableMovieReviewsContainer extends Component {


  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }
    fetchReviews = event => {
      event.preventDefault()
      const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=97eb60d840d042dbb12ef492a8abe754`
      fetch(URL).then(response => response.json())
      .then((reviews => this.setState({
        reviews: reviews.results
      })
      ));
    }

    handleChange = (event) => {
      this.setState({searchTerm: event.target.value})
    }

    render(){
       return (
       <div className="searchable-movie-reviews">
       <form onSubmit={this.fetchReviews}>
         <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
         <input type= "submit"></input>
       </form>
       <MovieReviews reviews={this.state.reviews}/>
       </div>
       )
     }

}

export default SearchableMovieReviewsContainer;

//   componentWillMount() {
//     fetch(URL).then(response => response.json())
//     .then((reviews => this.setState({reviews: reviews.results})));
//   }
//   render(){
//     return (
//     <div className="latest-movie-reviews">
//     <MovieReviews reviews={this.state.reviews}/>
//     </div>
//     )
//   }
// }
// export default LatestMovieReviewsContainer;
