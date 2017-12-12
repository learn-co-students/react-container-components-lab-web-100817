// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleClick = () => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}?api-key=8d302edd36934c0d8a015544a6c44b2d`)
      .then(res => res.json())
      .then(reviews => {
        this.setState({
          reviews: reviews.results
        })
      })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <input text="text" value={this.state.searchTerm} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Search</button>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
