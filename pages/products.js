import React, { Component } from "react";

import Logo from "../components/Logo";
import 'isomorphic-unfetch';
import LoremIpsum from "../components/LoremIpsum";



class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Product",
        }
    }

    static async getInitialProps ({ query }) {
        // eslint-disable-next-line no-undef
        const res = await fetch(`http://167.99.16.124:5001/products/${query.slug}`)
        const json = await res.json()
        console.log(query.slug,json)
        return { product: json }

    }
    render(product=this.props.product) {
            return(
                <React.Fragment>
                    {product.id}<br/>
                    {product.name}<br/>
                    {product.price}<br/>
                    {product.active}<br/>
                    {product.xs}<br/>
                    {product.s}<br/>
                    {product.m}<br/>
                    {product.l}<br/>
                    {product.xl}<br/>
                    {product.description}<br/>
                    {product.images.map((image,index)=>{
                        <img src={ `http://167.99.16.124:5001${image.url}`}/>

                    })}

                </React.Fragment>
            );

    }
}
export default Products;
