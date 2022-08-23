import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

import {Row} from 'react-bootstrap';

const Loader = () => (
  <Row className='justify-content-sm-between'>
    <CircularProgress size={200} thickness={5} color={'inherit'} />
  </Row>
);

export default Loader;
