import React from 'react'

const initialState = {
    Lemail: '',
    lpass: ''
}
export class Login extends React.Component {
    constructor() {
        super();
        this.state = initialState
    }

    onEmailChange = (e) => {
        const {value} = e.target
        this.setState({Remail: value})
    }
    onPasswordChange = (e) => {
        const {value} = e.target
        this.setState({Rpass: value})
    }

    onSubmitLog = () => {
        fetch('http://localhost:6536/users/login', {
            method: 'get',
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
                            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6">Email</label>
                                <input 
                                    onChange={this.onEmailChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address" 
                                    id="email-address" required/>

                       
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6">Password</label>
                                 <input 
                                    onChange={this.onPasswordChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password" 
                                    id="password" required/>
      
                            </div>
                        </fieldset>
                        <div className="">
                            <button 
                                onClick={this.onSubmitLog}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Sign Up</button>
                          
                        </div>
                        <div className="lh-copy mt3">
                            <a href="#0" onClick={() => {this.props.onRouteChange('register')}} className="f6 link dim black db">Sign Up</a>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}