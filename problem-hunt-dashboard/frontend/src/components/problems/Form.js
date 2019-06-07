import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

export class Form extends Component {
  render () {
    return (
      <div>
        <h1>Add Problem Form</h1>
        <Button primary>Submit Problem</Button>
      </div>
    );
  }
}

export default Form;
