import React from 'react'

class Product extends React.Component {
    constructor(props) {
        super(props)        
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }   

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.productId !== this.props.match.params.productId) {
            this.props.fetchProduct();
        }
    };


    render() {
        
        if (this.props.product === undefined) return null

        return (
            <div className='show'>
                <div className='product-show'>
                    <div className='product-img-container'>                       
                        <span className='product-img'>
                            <img className='product-photo'src={product.photoUrl}></img>
                        </span>
                    </div>
                <div className='product-text-container'>
                    <div className='product-title-header'>
                        <h1 className='product-title'>{product.title}</h1>     
                    </div>
                    <div className='product-properties'>
                        <label className='price'>Price:  
                            <span className='price-num'>  ${updatedPrice}<span className='free-ship' id='mid-text'> & FREE Shipping.</span></span>
                        </label>
                        <div className='show-col1'>
                            <label className='product-show-col1'>Artist:<span>  {product.artist}</span></label>
                            <br></br>
                            <label className='product-show-col1'>Year:<span>  {product.year}</span></label>
                            <br></br>
                            <label className='product-show-col1'> Style:<span>  {product.style}</span></label>
                            <br></br>
                            <label className='product-show-col1'>Type:<span>  {product.media_type}</span></label>
                            <br></br>
                            <label className='product-show-col1' id='about'>About this product
                                <br></br>
                                <span id='description'>{product.description}</span>
                                </label>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;