import React, {Component, Fragment} from 'react';
import { Routing } from './app/routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Routing />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;