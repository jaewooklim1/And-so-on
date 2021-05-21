import React from 'react';
import ProductIndexSingle from './product_index_single';

class ProductsIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchProducts();
    }

    generateRandomCard() {

        let emptyArray = [];
        
        const prodRange = this.props.products.length;    
        // const product1 = this.randomNumber(0, range);
        // debugger
        const randNum = Array(prodRange).fill(0).map((_, i) => i );    
       
        let counter = 0;

        while (counter < 4) {
            var randNum2 = this.randomNumber(0, prodRange)
            if (randNum.indexOf(randNum2) !== -1){
                emptyArray.push(randNum2);
                randNum.splice(randNum.indexOf(randNum2), 1)
                counter += 1;
            }
        }

        // debugger

        const { products } = this.props;
        const prodVal = Object.values(products)
        return emptyArray.map(i => {
            return (
                <div className="product-card-outline">
                    <h1 className="card-header">{prodVal[i].category}</h1>
                    <img className="product-card-image" src={prodVal[i].photoUrl}/>
                </div>
            )
        }) 
    }

    randomNumber(min, max) { 
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        // debugger
        const { products } = this.props;
        
        return (
            <div className='product-index'>
                {/* <span className='all-products'>Products</span> */}
                <ul className='product-row-one'>
                    {Object.values(products).length > 0 ? this.generateRandomCard() : ""}
                </ul>
            </div>
        );
        }
    }


export default ProductsIndex;
