import React from "react";
import { Link } from "react-router-dom";
import FuzzySearch from "fuzzy-search";
import "core-js/stable";
import "regenerator-runtime/runtime";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchResult: [] };
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
  }

  render() {
    return (
      <div className="search-result-container">
        {this.state.searchResult.map((searchItem) => {
          return (
            <div className="searchItem-display">
              <img src={searchItem.photoUrl}></img>
              <div className="searchItem-description">
                <h1>{searchItem.title}</h1>
                {searchItem.info}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchResult;
