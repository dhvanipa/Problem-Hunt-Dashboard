import React, {Fragment} from 'react';
import Form from './Form';
import Problems from './Problems';

export default function Dashboard () {
  return (
    <Fragment>
      <Form />
      <Problems />
    </Fragment>
  );
}
