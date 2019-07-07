import React, { Component } from "react";
import BuyButton  from '../components/BuyButton'
import 'isomorphic-unfetch';
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";

class Products extends Component {
    constructor(props) {
        super(props);
        const  link =  `/category/itemlist/${this.props.product.category.id}`;
        this.state = {
            title:"Product",
            selectedImage:'',
            heroOpen: false,
            mouseHover: false,
            selectedSize: '',
            link:link
        }
    }

    static async getInitialProps ({ query }) {
        // eslint-disable-next-line no-undef
        const res = await fetch(`http://api.geekdev.ee:5001/products/${query.slug}`)
        const json = await res.json()

        return { product: json, query: query.slug }

    }
    componentDidMount() {

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

    handleSize=(size)=>{
        this.setState({
            selectedSize: size,
        })
    }
    render(product=this.props.product, size=this.state.selectedSize) {
            return(
                <React.Fragment>
                    <section onClick={this.handleHero} className={this.state.heroOpen ? 'hero open' : 'hero'} style={{backgroundImage: `url("http://api.geekdev.ee:5001/${this.state.selectedImage ? this.state.selectedImage : product.images[0].url}")`}}>
                        <h1 onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}><span>{this.state.mouseHover? <img width={100} src={'/static/img/zoom-in.svg'}/> : product.name}</span></h1>
                        <BackButton  link={this.state.link}/>
                    </section>
                    <section className={'slides'}>
                        {product.images.length > 1 ? product.images.map((image,index)=>{
                            return(<img key={image.id} onClick={this.handleImg.bind(this, image.url)} src={`http://api.geekdev.ee:5001/${image.url}`}/>)
                        }): ''}
                    </section>
                    <section className={'card'}>
                        <section className={'description'}>
                            {product.description ? <React.Fragment><strong>Description</strong><br/>{product.description}</React.Fragment> : ''}
                        </section>
                        <section className={'sizes'}>
                            Select size:
                            {product.xs ? <button onClick={this.handleSize.bind(this, 'XS')} className={size ==='XS' ? 'available selected' : 'available'}>xs</button> : ''}
                            {product.s ? <button onClick={this.handleSize.bind(this, 'S')} className={size ==='S' ? 'available selected' : 'available'}>s</button> : ''}
                            {product.m ? <button onClick={this.handleSize.bind(this, 'M')} className={size ==='M' ? 'available selected' : 'available'}>m</button> : ''}
                            {product.l ? <button onClick={this.handleSize.bind(this, 'L')} className={size ==='L' ? 'available selected' : 'available'}>l</button> : ''}
                            {product.xl ? <button onClick={this.handleSize.bind(this, 'XL')} className={size ==='XL' ? 'available selected' : 'available'}>xl</button> : ''}
                        </section>
                        <BuyButton
                            size={this.state.selectedSize}
                            link={`http://167.99.16.124:5001/products/`}
                            product={this.props.product}
                        />
                    </section>
                    <Footer/>
                </React.Fragment>
            );

    }
}
export default Products;
