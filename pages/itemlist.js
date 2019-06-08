import React, { Component } from "react";
import  Link from "next/link";
import Head from "../components/Head";
import { withRouter } from 'next/router'
import 'isomorphic-unfetch';


class Itemlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Product",

        }
    }


    static async getInitialProps ({ query }) {
        // eslint-disable-next-line no-undef
        const res = await fetch(`http://167.99.16.124:5001/categories/${query.slug}`)
        const json = await res.json()
        console.log(json)
        return { products: json.products }

    }


    render(products=this.props.products) {
            return(
                <React.Fragment>
                    <Head title={this.state.title} />
                    {products.map((products) => {
                        return (
                            <Link  href={'/product?id=' + products.id} as={'/product/' + products.id} key={products.id} >
                                <a className={"categoryItem"} style={{backgroundImage: `url("http://167.99.16.124:5001${products.images[0].url}")`}}><span>{products.name}</span></a>
                            </Link>
                        );
                    })}
                </React.Fragment>
            );
    }
}
export default Itemlist;
