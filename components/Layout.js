import NextHead from "next/head";
import React from "react";
import Menu from "./Menu";
import '../sass/style.scss';



const Layout = (props) => (
    <React.Fragment>
        <NextHead>
            <title>{props.title || "MyShop"}</title>
            <meta name="title" content={props.title || "MyShop"}/>
        </NextHead>
        <Menu/>
        <div className="container">
            {props.children}
        </div>
    </React.Fragment>
);

export default Layout;
