import React, { Component } from "react";
import  Link from "next/link";
import Head from "../components/Head";
import Logo from "../components/Logo";
import { withRouter } from 'next/router'
import axios from "axios";


const query = withRouter(props => r(query_, props.router.query.title));



class Itemlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Product",
            products:[],
            loading:true
        }
    }

    async componentDidMount(props) {
        let response = await fetch(`http://167.99.16.124:5001/categories/`);
        if (!response.ok) {
            return
        }
        let products = await response.json()

        this.setState({ loading: false, products: products})
        console.log(this.props.id, this.state.products )
        this.state.products.map((products) => {

                this.setState({product: products});
                this.setState({image: this.state.product.images.url});
                this.setState({id: this.state.product.id});

        })
        console.log(`what is it? ${query}`)
    }

    render(products=this.state.products) {

        if(!this.state.loading){
            return(
                <React.Fragment>
                    <Head title={this.state.title} />
                    <h2 className="categoryList-title">Available product ({products.length})</h2>
                    {products.map((products) => {
                        return (
                            <Link href={'/category/products?title='+ products.id} key={products.id} >
                                <a className={"categoryItem"} style={{backgroundImage: `url("http://167.99.16.124:5001${products.images.url}")`}}><span>{products.name}</span></a>
                            </Link>
                        );
                    })}
                </React.Fragment>
            );
        }  else {
            return (<React.Fragment><Logo  /></React.Fragment>)
        }
    }
}
export default Itemlist;
