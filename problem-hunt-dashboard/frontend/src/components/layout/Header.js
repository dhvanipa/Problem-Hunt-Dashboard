import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

export class Header extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">Problem Hunt</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0" />
          <Button primary>Login</Button>
          <Button secondary>Sign Up</Button>
        </div>
      </nav>
    );
  }
}

export default Header;
