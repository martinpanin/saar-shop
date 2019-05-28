import React, { Component } from "react";
import  Link from "next/link";
import Head from "../components/Head";
import Axios from "axios";



class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Category",
        }
    }
    componentDidMount(){
    axios.get('http://geeksonline.eu:5001/categories')
        .then(function (response) {
        // handle success
        console.log(response);
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    render() {
        return(
            <React.Fragment>
                <Head title={this.state.title} />
                
            </React.Fragment>
        );
    }
}
export default Category;
