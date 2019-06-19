import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Navbar from './layout/Navbar';
import Dashboard from './problems/Dashboard';

class App extends Component {
  getUser () {
    fetch ('accounts/users/current').then (res => res.json ()).then (
      result => {
        this.setState ({
          user: result,
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState ({
          error,
        });
      }
    );
  }

  constructor (props) {
    super (props);
    this.state = {user: null};
  }

  componentDidMount () {
    this.getUser ();
  }

  render () {
    const {user} = this.state;
    return (
      <Fragment>
        <Navbar user={user} />
        <div className="container">
          <Dashboard user={user} />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render (<App />, document.getElementById ('app'));
