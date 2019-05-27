import React, { Component } from "react";
import  Link from "next/link";
import Head from "../components/Head";



class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Category",
        }
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
