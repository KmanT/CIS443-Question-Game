import React, { Component } from 'react';
import LinkButton from '../components/LinkButton';

export default class Start extends Component {
    nextPath(path) {
        this.context.history.push(path);
    }

    render() {
        return (
        <React.Fragment>
            <div className="container">
                <LinkButton to='/login'>Login</LinkButton>
            </div>
            <div className="container">
                <LinkButton to='/sign-up'>Sign Up</LinkButton>
            </div>   
        </React.Fragment>
        )
    }
}
