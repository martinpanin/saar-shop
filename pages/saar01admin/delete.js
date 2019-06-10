import React, { Component } from "react";
import axios from 'axios';
import  Link from "next/link";

class Delete extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title:"Saar Cult",
            loggedIn: false
        }
    }

    componentDidMount(){
        if(sessionStorage.getItem('token')){
            const token =  sessionStorage.getItem('token');
            const user =  sessionStorage.getItem('user');
            this.setState({
                loggedIn: true,
                token: token,
                user:user,
            })
            console.log(user)
        }
    

    }

    handleLogout=()=> {
        sessionStorage.clear();
        this.setState({
            loggedIn: false,
        })
    }

    handleLogin=(user,pass)=> {
        axios.post('http://167.99.16.124:5001/auth/local', {
            identifier: user,
            password: pass
        })
        .then(response => {
            // Handle success.
            sessionStorage.setItem('token', response.data.jwt);
            sessionStorage.setItem('user', response.data.user);
            const user =  response.data.user.username ;
            console.log(user)
            this.setState({
                loggedIn: true,
                user:user,
            })
            
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error);
        });
        }

        handleForm=(event)=>{
            this.setState({
                [event.target.name]: event.target.value
            })
        }
   
    render() {
        if(this.state.loggedIn) {
            return(
                <React.Fragment>
                  add
                </React.Fragment>
            );
        } else {
            return(
                <React.Fragment>
                    <section className={'container-admin'}>
                        <section className={'admin-login'}>
                            Username<br/>
                            <input type={'text'} name={'user'}  onChange={this.handleForm}/><br/>
                            Password <br/>
                            <input type={'password'} name={'pass'} onChange={this.handleForm}/><br/>
                            <button onClick={this.handleLogin.bind(this, this.state.user,  this.state.pass)}>Login</button>
                        </section>
                    </section>
                </React.Fragment>
            );
        }
        
    }
}
export default Delete;
