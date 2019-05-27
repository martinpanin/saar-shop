import React from 'react'
import App, { Container } from 'next/app'
import Layout from "../components/Layout";

class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = {
         
        }
    }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    
    
    return { pageProps }
  }
    stateChange = (title) =>{
        this.setState({title: title})
    }
    handleLang = (lang) => {
      this.setState({lang: lang});
    };

  render() {
    const { Component, pageProps } = this.props

    return (
        <Layout >
            <Container>
                <Component {...pageProps} />
            </Container>
        </Layout>
    )
  }
}

export default MyApp