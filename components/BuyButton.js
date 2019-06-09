import React, { Component } from 'react';


class BuyButton extends Component {

    render(props =  this.props,product = this.props.product) {
        return (
            <React.Fragment>
                <button
                    disabled={props.size ? false :  true}
                    className="snipcart-add-item BuyButton"
                    data-item-id={product.id}
                    data-item-name={product.name}
                    data-item-price={product.price}
                    data-item-size={props.size}
                    data-item-url={'http://167.99.16.124:5001/products/'}
                    data-item-description={product.description}>
                    ADD TO CART <br/>
                    {props.size? `Size:${props.size}` : ''} {props.size?`| ${product.price}€`: `(${product.price}€)`}
                </button>
            </React.Fragment>
        );
    }
}

export default BuyButton;