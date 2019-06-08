import React, { Component } from 'react';


class BuyButton extends Component {

    render(link =  this.props.link,product = this.props.product) {
        return (
            <React.Fragment>
                <button
                    className="snipcart-add-item BuyButton"
                    data-item-id={product.id}
                    data-item-name={product.name}
                    data-item-price={product.price}
                    data-item-url={link}
                    data-item-description={product.description}>
                    ADD TO CART ({product.price}$)
                </button>
            </React.Fragment>
        );
    }
}

export default BuyButton;