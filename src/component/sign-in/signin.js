import React, { Component } from 'react'
import './signin.scss'
import FormInput from '../form-input/form-input'


export default class Signin extends Component {
    state={
        email:'',
        password:''
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            email:'',
            password:''
        });
    }

    handleChange=(event)=>{
        const {value,name}=event.target;
        this.setState({
            [name]:value
        });
    }


  render() {
    return (
      <div className="signin">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>


        <form onSubmit={this.handleSubmit}>
            <FormInput
                name='email'
                type='email'
                handleChange={this.handleChange}
                value={this.state.email}
                label='email'
                required
            />
            <FormInput
                name='password'
                type='password'
                label='password'
                handleChange={this.handleChange}
                value={this.state.email}
                required
            />

        </form>

      </div>
    )
  }
}
