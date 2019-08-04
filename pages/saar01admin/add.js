import React, { Component } from "react";
import axios from 'axios';
import  Link from "next/link";
import AddForm from "../../components/AddForm";

class Add extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title:"Saar Cult",
            loggedIn: false,
            type:'none',
            token:'',
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
        axios.post('https://api.saarcult.ee/auth/local', {
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

        handleType=(type)=>{
            this.setState({
                type:type
            })
        }
   
    render() {
        if(this.state.loggedIn) {
            if(this.state.type === 'none'){
                return(
                    <React.Fragment>
                            <section className={'admin-login'}>
                                Hello {this.state.user}
                                <Link href={`${window.location.protocol}//${window.location.hostname}${window.location.port}/saar01admin`}>
                                    <button onClick={this.handleLogout.bind(this)}>Log out</button>
                                </Link>
                            </section>
                        <section className={'admin-variant'}>
                                <a onClick={this.handleType.bind(this,'products')}>
                                    Product
                                </a>

                                <a onClick={this.handleType.bind(this,'categories')}>
                                    Category
                                </a>
                            
                        </section>
                    </React.Fragment>
                );
            } else {
                return(
                    <React.Fragment>
                        <section className={'admin-login'}>

                                <Link href={`${window.location.protocol}//${window.location.hostname}${window.location.port}/saar01admin`}>
                                    <button onClick={this.handleLogout.bind(this)}>Log out</button>
                                </Link> | <a className={'productBtn'} onClick={this.handleType.bind(this,'product')}>
                                    Product
                                </a>
                                <a className={'categoryBtn'} onClick={this.handleType.bind(this,'category')}>
                                    Category
                                </a> | Adding: <span>{this.state.type}</span> 
                            </section>
                            <section className={'addForm'}>
                            <AddForm token={this.state.token} type={this.state.type}/>
                            </section>
                      
                    </React.Fragment>
                );
            }
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
export default Add;
