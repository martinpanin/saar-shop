import React, { Component } from "react";
import BuyButton  from '../components/BuyButton'
import Logo from "../components/Logo";
import 'isomorphic-unfetch';
import LoremIpsum from "../components/LoremIpsum";
import Parallax from "../components/Parallax";



class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Product",
            selectedImage:'',
            heroOpen: false,
            mouseHover: false
        }
    }

    static async getInitialProps ({ query }) {
        // eslint-disable-next-line no-undef
        const res = await fetch(`http://167.99.16.124:5001/products/${query.slug}`)
        const json = await res.json()
        console.log(query.slug)
        return { product: json, query: query.slug }

    }

    handleImg=(img)=>{
        this.setState({
            selectedImage:img,
        })
    }

    handleHero=()=>{
        this.setState({
            heroOpen: !this.state.heroOpen,
        })
    }

    handleHover=()=>{
        this.setState({
            mouseHover: !this.state.mouseHover,
        })
    }
    render(product=this.props.product) {
            return(
                <React.Fragment>
                    <section onClick={this.handleHero} className={this.state.heroOpen ? 'hero open' : 'hero'} style={{backgroundImage: `url("http://167.99.16.124:5001/${this.state.selectedImage ? this.state.selectedImage : product.images[0].url}")`}}>
                        <h1 onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}><span>{this.state.mouseHover? <img width={100}  src={'/static/img/magnifying.png'}/> : product.name}</span></h1>
                       {/* <Parallax  backgroundImage={`http://167.99.16.124:5001/${this.state.selectedImage ? this.state.selectedImage : product.images[0].url}`}/>*/}
                    </section>
                    <section className={'slides'}>
                        {product.images.length > 1 ? product.images.map((image,index)=>{
                            return(<img key={index} onClick={this.handleImg.bind(this, image.url)} src={`http://167.99.16.124:5001/${image.url}`}/>)
                        }): ''}
                    </section>
                    <section className={'card'}>
                        <section className={'sizes'}>
                            Available sizes:
                            {product.xs ? <span className={'available'}>xs</span> : ''}
                            {product.s ? <span className={'available'}>s</span> : ''}
                            {product.m ? <span className={'available'}>m</span> : ''}
                            {product.l ? <span className={'available'}>l</span> : ''}
                            {product.xl ? <span className={'available'}>xl</span> : ''}
                        </section>
                        <section className={'description'}>
                            <strong>Description</strong><br/>{product.description}
                        </section>
                        <BuyButton
                            link={`http://localhost:3000/product/${this.props.query}`}
                            product={this.props.product}
                        />
                    </section>
                </React.Fragment>
            );

    }
}
export default Products;
