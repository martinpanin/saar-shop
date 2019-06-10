import React, { Component } from 'react';

class AddForm extends Component {

    render(type=this.props.type) {
       if(type === 'product'){
        return (
            <React.Fragment>
                <form>
                    <input name={'name'} type={'text'}/>
                </form>
            </React.Fragment>
        );
       } else if(type === 'category'){
        return (
            <React.Fragment>
                <form>
                    <input name={'name'} type={'text'}/>2
                </form>
            </React.Fragment>
        );
       }
        
    }
}

export default AddForm;