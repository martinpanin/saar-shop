import React, { Component } from "react";
import  Link from "next/link";
import Head from "../components/Head";
import 'isomorphic-unfetch';
import BackButton from "../components/BackButton";


class Itemlist extends Component {
    constructor(props) {
        super(props);
        const  link =  `/category`;
        this.state = {
            title:"Product",
            link:  link
        }
    }


    static async getInitialProps ({ query }) {
        // eslint-disable-next-line no-undef
        const res = await fetch(`http://api.geekdev.ee:5001/categories/${query.slug}`)
        const json = await res.json()
        return { products: json.products }

    }


    render(products=this.props.products) {
            return(
                <React.Fragment>
                    <Head title={this.state.title} />
                    <BackButton  link={this.state.link}/>
                    {products.map((products) => {
                        if(products.active){
                            return (
                                <Link href={'/category/product?id=' + products.id} as={'/category/product/' + products.id} key={products.id} >
                                    <a className={"ItemList"} style={{backgroundImage: `url("http://api.geekdev.ee:5001${products.images[0].url}")`}}><span>{products.name}</span></a>
                                </Link>
                            );
                        }
                    })}
                </React.Fragment>
            );
    }
}
export default Itemlist;
