import React, { Component } from 'react'
import LinkButton from '../components/LinkButton';
import BackButton from '../components/BackButton';

export default class CreateGame extends Component {

    makeId(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }    
        return text;
    }
    
    generateKey() {
        /*
        let keyContainer = document.getElementById("keyContainer");
            if (keyContainer.hasChildNodes) {
                keyContainer.removeChild(keyContainer.childNodes[0]);
            }
            let keyText = document.createTextNode(this.makeId(5));
            keyContainer.appendChild(keyText);
        keyContainer.setAttribute("style", "display: flex");*/
        //this.setState({ gameKey: this.makeId(5)});
        

    }
  
    render() {
        return (
            <React.Fragment>
                <h2>Create Game</h2>
                <div class="container">
                    <button id="btnGenerate" className="link-btn" onClick={ this.generateKey() }>Generate!</button>
                </div>
                <p>Press 'Generate!' to get a game-key and share it with whom you are playing against</p>
                <div className="container" id="keyContainer">
                    {this.state.gameKey}
                </div>
                <div className="container">
                    <BackButton>Back</BackButton>
                    <LinkButton to="/pair">Continue</LinkButton>
                </div>
            </React.Fragment>
        )
    }
}
