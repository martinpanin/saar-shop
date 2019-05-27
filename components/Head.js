import NextHead from "next/head";
import React from "react";




const Head = (props) => (
        <NextHead>
            <title>{`Saar Cult || ${props.title}`}</title>
            <meta name="title" content={`Saar Cult || ${props.title}`}/>
        </NextHead>
);

export default Head;
