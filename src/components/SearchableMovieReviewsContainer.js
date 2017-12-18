// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends React.Component{

  constructor(){
    super();
    this.state={
      reviews: [],
      searchTerm: ''
    }
  }

  handleSearchInputChange= event =>{
    console.log('input change',event)
  }

  handleSubmit= event=>{
    event.preventDefault();
    console.log('submit',event);
  }
  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
        <label htmlFor='search-input'>Search Movie Reviews</label>

            <input
              id='search-input'
              type="text"
              style={{width: 300}}

              onChange={this.handleSearchInputChange} />
            <button type="submit">Submit</button>

        </form>
        {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
