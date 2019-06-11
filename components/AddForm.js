import React, { Component } from 'react';

class AddForm extends Component {

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value,
        })
        
    }

    render(type=this.props.type) {
       if(type === 'product'){
        return (
            <React.Fragment>
                <form>
                    <h3>Products</h3>
                    <label>Name</label>
                    <input onChange={this.handleChange} name={'name'} type={'text'}/>
                    <label>Price</label>
                    <input onChange={this.handleChange} name={'price'} type={'number'}/>
                    <label>Active</label>
                    <input onChange={this.handleChange} name={'active'} type={'radio'}/>
                    <label>Image</label>
                    <input onChange={this.handleChange} name={'image'} type={'file'}/>
                    <button type={"submit"}>Send</button>
                </form>
            </React.Fragment>
        );
       } else if(type === 'category'){
        return (
            <React.Fragment>
                <form>
                    <h3>Category</h3>
                    <label>Name</label>
                    <input onChange={this.handleChange} name={'name'} type={'text'}/>
                    <label>Image</label>
                    <input onChange={this.handleChange} name={'image'} type={'file'}/>
                    <button type={"submit"}>Send</button>
                </form>
            </React.Fragment>
        );
       }
        
    }
}

export default AddForm;