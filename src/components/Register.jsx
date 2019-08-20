import React from 'react'


const initialState = {
    Rname: '',
    Remail: '',
    Rpass: ''
}
export class Register extends React.Component {
    constructor() {
        super();
        this.state = initialState
    }

    onNameChange = (e) => {
        const {value} = e.target
        this.setState({Rname: value})
    }
    onEmailChange = (e) => {
        const {value} = e.target
        this.setState({Remail: value})
    }
    onPasswordChange = (e) => {
        const {value} = e.target
        this.setState({Rpass: value})
    }

    onSubmitReg = () => {
        fetch('http://localhost:6536/users/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                 name: this.state.Rname,
               email: this.state.Remail,
               password: this.state.Rpass 
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.email){
                this.props.loadUser(data)
                this.props.onRouteChange('registered')
            }
        })
    }

    render() {
        return (
            <div>
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6">Name</label>
                                <input 
                                    onChange={this.onNameChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="name" 
                                    id="name"/>
                    
                            </div>
       
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6">Email</label>
                                <input 
                                    onChange={this.onEmailChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address" 
                                    id="email-address"/>

                       
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6">Password</label>
                                 <input 
                                    onChange={this.onPasswordChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password" 
                                    id="password"/>
      
                            </div>
                        </fieldset>
                            <div className="">
                                <button 
                                    onClick={this.onSubmitReg}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Sign Up</button>
                          
                            </div>
            
                            <div className="lh-copy mt3">
                                <a href="#0" className="f6 link dim black db">Sign in</a>
                            </div>
                    </div>
                </main>
            </div>
        )
    }
}