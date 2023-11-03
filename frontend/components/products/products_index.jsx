import React from "react";
import ProductIndexSingle from "./product_index_single";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

class ProductsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  generateRandomCard() {
    let emptyArray = [];

    const prodRange = this.props.products.length;

    const randNum = Array(prodRange)
      .fill(0)
      .map((_, i) => i);

    let counter = 0;

    while (counter < 8) {
      var randNum2 = this.randomNumber(0, prodRange);
      if (randNum.indexOf(randNum2) !== -1) {
        emptyArray.push(randNum2);
        randNum.splice(randNum.indexOf(randNum2), 1);
        counter += 1;
      }
    }

    const { products } = this.props;
    const prodVal = Object.values(products);
    return emptyArray.map((i) => {
      return (
        <Link to={`/products/${prodVal[i].id}`}>
          <Grid item>
            <div className="product-card-container">
              <div className="product-card-outline">
                <div className="card-header">{prodVal[i].category}</div>
                <img className="product-card-image" src={prodVal[i].photoUrl} />
              </div>
            </div>
          </Grid>
        </Link>
      );
    });
  }

  randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const { products } = this.props;

    return (
      <div className="product-index">
        <Grid container>
          {Object.values(products).length > 0 ? this.generateRandomCard() : ""}
        </Grid>
      </div>
    );
  }
}

export default ProductsIndex;
