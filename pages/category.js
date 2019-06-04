import React, { Component } from "react";
import  Link from "next/link";
import Head from "../components/Head";
import Loading from "../components/Loading";
import 'isomorphic-unfetch';


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Category",
            categories:[],
            loading:false
        }
        
    }

    static async getInitialProps () {
        // eslint-disable-next-line no-undef
        const res = await fetch('http://167.99.16.124:5001/categories/')
        const json = await res.json()
        return { categories: json }
    }
    

    render(cat=this.props.categories) {
        if(!this.state.loading){
        return(
            <React.Fragment>
                <Head title={this.state.title} />
                {cat.map((cat) => {
                    return (
                        <Link prefetch href={{pathname: `/category/${cat.name}`, query: { id: cat.id }}} key={cat.id} >
                            <a className={"categoryItem"} style={{backgroundImage: `url("http://167.99.16.124:5001${cat.images.url}")`}}><span>{cat.name}</span></a>
                        </Link>
                    );
                })}     
            </React.Fragment>
        );
       }  else {
            return (<React.Fragment><Loading /></React.Fragment>)
       }
    }
}
export default Category;
