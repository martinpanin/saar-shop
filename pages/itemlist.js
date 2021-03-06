import React, { Component } from "react";
import  Link from "next/link";
import Head from "../components/Head";
import 'isomorphic-unfetch';
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";


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
        const res = await fetch(`https://api.saarcult.ee/categories/${query.slug}`)
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
                                    <a className={"ItemList"} style={{backgroundImage: `url("https://api.saarcult.ee/${products.images[0].url}")`}}><span>{products.name}</span></a>
                                </Link>
                            );
                        }
                    })}
                    <Footer/>
                </React.Fragment>
            );
    }
}
export default Itemlist;
