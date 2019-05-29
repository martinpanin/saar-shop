import React, { Component } from "react";
import  Link from "next/link";
import Head from "../components/Head";
import Logo from "../components/Logo";
import axios from "axios";
import LoremIpsum from "../components/LoremIpsum";



class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Category",
            categories:[],
            loading:true
        }
    }
    componentDidMount(){
    axios.get('http://167.99.16.124:5001/categories')
        .then(function (response) {
        const categories = response.data;
        this.setState({categories:categories, loading:false})
    }.bind(this))
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    render(cat=this.state.categories) {
        if(!this.state.loading){
        return(
            <React.Fragment>
                <Head title={this.state.title} />
                <h2 className="categoryList-title">Available categories ({cat.length})</h2>
                {cat.map((cat) => {
                    return (
                        <Link href={'/category/products?title='+ cat.id} key={cat.id} >
                            <a style={{backgroundImage: `url("http:/167.99.16.124:5001${cat.image.url}")`}}><span>{cat.name}</span></a>
                        </Link>
                    );
                })}     
            </React.Fragment>
        );
       }  else {
        return <Logo  />
       }
    }
}
export default Category;
