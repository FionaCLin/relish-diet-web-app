import React from 'react';
import SearchInputForm from '../SearchInputForm';
import {url_img} from '../../constants/globalFunctions';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Dashboard = ({recipesList}) => {
  const numPerRow = 3;
  const rows = [...new Array(Math.ceil(recipesList.length / numPerRow))].map((val, page) =>
    recipesList.slice(page * numPerRow, (page + 1) * numPerRow),
  );
  return (
    <div className='bg-white'>
      <Container className='pt-2 m-auto'>
        <SearchInputForm />
        {rows.map((row, index) => (
          <Row className='justify-content-space-between' key={index}>
            {row.map((item, i) => (
              <Col md='auto' key={i}>
                <Link to={'recipe/' + item.id} className='dash_img_wrapper' style={{float: 'left'}}>
                  <div style={url_img(item.image)} className='dash_img' />
                  <div className='overlay'>
                    <div className='img_text'>{item.name}</div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
};

Dashboard.propTypes = {
  recipesList: PropTypes.array,
};

export default Dashboard;
