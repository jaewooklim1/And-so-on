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

  //async removed here
  async componentDidMount() {
    debugger;
    await this.props.fetchProducts(this.state.keyword);
    // this.props.fetchProducts();
    const searchTerm = this.props.location.search.split("=")[1];
    debugger;
    const searcher = new FuzzySearch(
      Object.values(this.props.allProducts),
      ["title"],
      {
        caseSensitive: false,
      }
    );

    debugger;

    const result = searcher.search(searchTerm);
    debugger;
    console.log(searchTerm);
    this.setState({ searchResult: result });
    console.log(this.state);
    console.log(result);
    // this.props.history.push(`/search?=${this.state.result}`);

    // console.log(searchResult);
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
                  <ul className="search-price">{searchItem.price}</ul>
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
        <img src="https://i.imgur.com/7lgVtA3.gif"></img>
        <div className="empty-search-text">
          {" "}
          No results found, please try another
        </div>
      </div>
    );
  }

  render() {
    return this.state.searchResult.length === 0
      ? this.searchResultBad()
      : this.searchResultGood();
  }
}

export default SearchResult;
