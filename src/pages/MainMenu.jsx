import React, { Component } from 'react';
import LinkButton from '../components/LinkButton';

export default class MainMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Welcome [username]!</h2>
        <div className="container">
            <LinkButton to="/create-game">Create Game</LinkButton>
        </div>
        <div className="container">
            <LinkButton to="/join-game">Join Game</LinkButton>
        </div>
      </React.Fragment>
    )
  }
}
