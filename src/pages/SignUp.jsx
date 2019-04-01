import React, { Component } from 'react'
import LinkButton from '../components/LinkButton';
import BackButton from '../components/BackButton';

export default class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Sign Up</h2>
        <div className="container">
            <label htmlFor="txtEmail">Email </label>
            <input type="text" id="txtEmail"/>
        </div>
        <div className="container">
            <label htmlFor="txtUserName">Username </label>
            <input type="text" id="txtEmail"/>
        </div>
        <div className="container">
            <label htmlFor="txtPass">Password </label>
            <input type="text" id="txtPass"/>
        </div>
        <div className="container">
            <label htmlFor="txtRePass">Re-enter Password </label>
            <input type="text" id="txtRePass"/>
        </div>
        <div className="container">
            <BackButton>Back</BackButton>
            <div className="spacer"></div>
            <LinkButton to="/main-menu">Sign Up & Continue</LinkButton>
        </div>   
      </React.Fragment>
    )
  }
}
