import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Start from './pages/Start';
import './css/main.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MainMenu from './pages/MainMenu';
import CreateGame from './pages/CreateGame';
import JoinGame from './pages/JoinGame';
import Pair from './pages/Pair';

/** TODOS
 * -Implement Redux
 * -Create Firebase DB
 * -Implement Firebase
 * -Create Actual Game
 */

class App extends Component {
  state = {
    user: "",
    gameKey: ""
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>U-Knowmi?</h1>
        </header>
        <div id="outWrapper">
          <Router>
            <Switch>
              <Route exact path="/"><Start /></Route>
              <Route path="/sign-up"><SignUp /></Route>
              <Route path="/login"><Login /></Route>
              <Route path="/main-menu"><MainMenu /></Route>
              <Route path="/create-game"><CreateGame /></Route>
              <Route path="/join-game"><JoinGame /></Route>
              <Route path="/pair"><Pair /></Route>
            </Switch>            
          </Router>
        </div>
        
      </div>
    );
  }
}

export default App;
