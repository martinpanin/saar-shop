import React, { Component } from "react";
import  Link from "next/link";
import Head from "../components/Head";
import Logo from "../components/Logo";



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Saar Cult",
        }
    }

    render() {
        return(
            <React.Fragment>
                <Head title={this.state.title} />
                <Link href={'/category'}>
                    <a href={'/category'}>
                       <Logo  />
                    </a>
                </Link>
               
            </React.Fragment>
        );
    }
}
export default Index;
