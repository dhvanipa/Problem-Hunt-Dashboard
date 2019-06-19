import React, {Fragment} from 'react';
import Top from './Top';
import Problems from './Problems';
import './Dashboard.css';
import {Divider} from 'semantic-ui-react';
export default function Dashboard () {
  return (
    <Fragment>
      <div className="dashboard">
        <Top />
        <Divider />
        <Problems />
      </div>
    </Fragment>
  );
}
