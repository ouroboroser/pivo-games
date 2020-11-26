import React, {Component, Fragment} from 'react';
import { Routing } from './app/routes';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div className = 'App'>
      <Fragment>
        <Router>
          <Switch>
            <Routing />
          </Switch>
        </Router>
      </Fragment>
      </div>
    );
  }
}

export default App;