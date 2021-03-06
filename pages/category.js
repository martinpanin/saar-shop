import React, { Component } from "react";
import  Link from "next/link";
import Head from "../components/Head";
import 'isomorphic-unfetch';
import Footer from "../components/Footer";


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Category",

        }
        
    }

    static async getInitialProps () {
        // eslint-disable-next-line no-undef
        const res = await fetch('https://api.saarcult.ee/categories/')
        const json = await res.json()

        return { categories: json }
    }
    

    render(cat=this.props.categories) {
        return(
            <React.Fragment>
                <Head title={this.state.title} />
                {cat.map((cat) => {
                    if(cat.products.length>0){
                        return (
                            <Link href={'/category/itemlist?id=' + cat.id} as={'/category/itemlist/' + cat.id}  prefetch  key={cat.id} >
                                <a className={"categoryItem"} style={{backgroundImage: `url("https://api.saarcult.ee/${cat.images.url}")`}}><span>{cat.name}</span></a>
                            </Link>
                        );
                    }
                })}     
                <Footer/>
            </React.Fragment>
        );
    }
}
export default Category;
