// Code SearchableMovieReviewsContainer Here
import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(reviews => this.setState({reviews: [...reviews.results]}))
  }
  searchDatabase = () => {
    let searchTerm = this.state.searchTerm.split(" ").join("_")
    let url = URL + `&query=${searchTerm}`
    fetch(url)
      .then(res => res.json())
      .then(reviews => this.setState({reviews: [...reviews.results]}))
  }

  render() {
    console.log(this.state.reviews)
    const x = this.state.reviews.length > 0 ? <MovieReviews reviews={this.state.reviews} /> : null
    return (
      <div className="searchable-movie-reviews">
        <h3>Search For Movies</h3>
        <input type="text" onChange={this.handleChange} name="searchTerm" value={this.state.searchTerm} />
        <button type="submit" onClick={this.searchDatabase}>Search</button>
        {x}
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
