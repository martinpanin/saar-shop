import React, { Component } from "react";
import  Link from "next/link";
import Head from "../components/Head";
import Logo from "../components/Logo";
import axios from "axios";
import LoremIpsum from "../components/LoremIpsum";



class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Product",
            products:[],
            loading:true
        }
    }
    componentDidMount(){
        axios.get('http://167.99.16.124:5001/products')
            .then(function (response) {
                const categories = response.data;
                this.setState({categories:categories, loading:false})
            }.bind(this))
            .catch(function (error) {
                // handle error
                console.log(error);
            })
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
                                <a className={"categoryItem"} style={{backgroundImage: `url("http://167.99.16.124:5001${products.image.url}")`}}><span>{products.name}</span></a>
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
export default Products;
