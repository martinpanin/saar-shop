import React, { Component } from "react";
import  Link from "next/link";
import Head from "../components/Head";
import 'isomorphic-unfetch';


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Category",

        }
        
    }

    static async getInitialProps () {
        // eslint-disable-next-line no-undef
        const res = await fetch('http://167.99.16.124:5001/categories/')
        const json = await res.json()

        return { categories: json }
    }
    

    render(cat=this.props.categories) {
        return(
            <React.Fragment>
                <Head title={this.state.title} />
                {cat.map((cat,index) => {
                    if(cat.products.length>0){
                        return (
                            <Link href={'/category/itemlist?id=' + cat.id} as={'/category/itemlist/' + cat.id}  prefetch  key={cat.id} >
                                <a className={"categoryItem"} style={{backgroundImage: `url("http://167.99.16.124:5001${cat.images.url}")`}}><span>{cat.name}</span></a>
                            </Link>
                        );
                    }
                })}     
            </React.Fragment>
        );
    }
}
export default Category;
