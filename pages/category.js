import React, { Component } from "react";
import  Link from "next/link";
import Head from "../components/Head";
import axios from "axios";
import Loading from "../components/Loading";



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
                        <Link href={'/category/itemlist/?title='+ cat.id} key={cat.id} >
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
