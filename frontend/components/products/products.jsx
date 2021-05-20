import React from 'react'

class Product extends React.Component {
    constructor(props) {
        super(props)        
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }   

    render() {
        
        if (this.props.product === undefined) return null

        return (
            <div>
                
               
            
            </div>
        )
    }
}

export default Product;