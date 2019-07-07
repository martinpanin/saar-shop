import NextHead from "next/head";
import React from "react";




const Head = (props) => (
        <NextHead>
            <title>{`Saar Cult || ${props.title}`}</title>
            <meta name="title" content={`Saar Cult || ${props.title}`}/>
            <script src="https://kit.fontawesome.com/41387889a2.js"></script>
        </NextHead>
);

export default Head;
