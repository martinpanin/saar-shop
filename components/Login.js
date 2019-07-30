




const Head = (props) => (
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

export default Head;
