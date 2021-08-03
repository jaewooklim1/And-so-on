import React from "react";
import { Link } from "react-router-dom";
import FuzzySearch from "fuzzy-search";
import "core-js/stable";
import "regenerator-runtime/runtime";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchResult: [] };
    this.searchResultGood = this.searchResultGood.bind(this);
    this.searchResultBad = this.searchResultBad.bind(this);
  }

  async componentDidMount() {
    await this.props.fetchProducts();
    const searchTerm = this.props.location.search.split("=")[1];

    const searcher = new FuzzySearch(
      Object.values(this.props.allProducts),
      ["title"],
      {
        caseSensitive: false,
      }
    );

    debugger;

    const result = searcher.search(searchTerm);
    this.setState({ searchResult: result });
    console.log(this.state);
    console.log(result);
    console.log(searchResult);
  }

  searchResultGood() {
    // const { products } = this.props;
    // const prodVal = Object.values(products);
    return (
      <div className="search-result-container">
        {this.state.searchResult.map((searchItem) => {
          return (
            <div class="row" className="searchItem-display">
              <Link to={`/products/${searchItem.id}`}>
                <div class="column" className="searchItem-image">
                  <img src={searchItem.photoUrl}></img>
                </div>
                <div class="column" className="searchItem-description">
                  <h1>
                    {searchItem.title} - {searchItem.info}
                  </h1>
                  <ul>{searchItem.price}</ul>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }

  searchResultBad() {
    return (
      <div className="search-result-container">
        No result, please try another
      </div>
    );
  }

  render() {
    return this.props.searchResult.length === 0
      ? this.searchResultBad()
      : this.searchResultGood();
  }
}

export default SearchResult;
