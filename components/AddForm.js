import React, { Component } from 'react';
import axios from "axios";
const  api =  `https://api.saarcult.ee/categories/`;
class AddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token:this.props.token,
            categories:[]
        }
    }

    componentDidMount() {
        this.setState({
            token:this.props.token,
        })
        axios.get(api, {
        })
            .then((res)=> {
              this.setState({
                  categories: res.data
              })
            })
            .catch( (error)=> {
                this.setState({
                    categories: []
                })
                console.log(error);
            })
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value,
        })
        
    }

     handlePost = e=>{
        e.preventDefault();
        axios.post(`https://api.saarcult.ee/${this.props.type}`, {
            headers: {
                Authorization: `Bearer ${this.props.token}`
            },
            data: {
                name: "1"
            }


        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(type=this.props.type) {
       if(type === 'products'){
        return (
            <React.Fragment>
                <form>
                    <h3>Products</h3>
                    <label>Name</label>
                    <input onChange={this.handleChange} name={'name'} type={'text'}/>
                    <label>Price</label>
                    <input onChange={this.handleChange} name={'price'} type={'text'}/>
                    <label for={'active'}>Active</label>
                    <input onChange={this.handleChange} id={'active'} name={'active'} type={'checkbox'}/>
                    <section style={{display:'flex', flexFlow:'row wrap', justifyContent:'space-evenly'}}>
                        <section>
                            <label for={'XS'}>XS</label>
                            <input onChange={this.handleChange} name={'XS'} id={'XS'} type={'checkbox'}/>
                        </section>
                        <section>
                            <label for={'S'}>S</label>
                            <input onChange={this.handleChange}  id={'S'} name={'S'} type={'checkbox'}/>
                        </section>
                        <section>
                            <label for={'M'}>M</label>
                            <input onChange={this.handleChange}  id={'M'} name={'M'} type={'checkbox'}/>
                        </section>
                        <section>
                            <label for={'L'}>L</label>
                            <input onChange={this.handleChange} id={'L'} name={'L'} type={'checkbox'}/>
                         </section>
                        <section>
                            <label for={'XL'}>XL</label>
                            <input onChange={this.handleChange} id={'XL'} name={'XL'} type={'checkbox'}/>
                    </section>
                    </section>
                    <label>Category</label>
                    <select onChange={this.handleChange} name={'category'} >
                        <option>Choose..</option>
                        {this.state.categories.map(
                            (cat)=><option key={cat.id} value={cat.id}>{cat.name}</option>
                        )}
                    </select>
                    <label>Image</label>
                    <input onChange={this.handleChange} name={'image'} type={'file'}/>
                    <button type={"submit"} onClick={this.handlePost}>Send</button>
                </form>
            </React.Fragment>
        );
       } else if(type === 'categories'){
        return (
            <React.Fragment>
                <form>
                    <h3>Category</h3>
                    <label>Name</label>
                    <input onChange={this.handleChange} name={'name'} type={'text'}/>
                    <label>Image</label>
                    <input onChange={this.handleChange} name={'image'} type={'file'}/>
                    <button onClick={this.handlePost} type={"submit"}>Send</button>
                </form>
            </React.Fragment>
        );
       }
        
    }
}

export default AddForm;