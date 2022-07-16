import React from 'react';
import SearchInputForm from '../SearchInputForm';
import {url_img} from '../../constants/globalFunctions';
import {Link} from 'react-router-dom';
import {Container, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Dashboard = ({recipesList}) => {
  const numPerRow = 3;
  const rows = [...new Array(Math.ceil(recipesList.length / numPerRow))].map((val, page) =>
    recipesList.slice(page * numPerRow, (page + 1) * numPerRow),
  );
  return (
    <div className='bg-white'>
      <Container className='pt-2 m-auto page-wrapper'>
        <SearchInputForm />
        {rows.map((row, index) => (
          <Col xs='12' className='dashboard-content-wrapper' key={index}>
            {row.map((item, i) => (
              <Col sm='12' md='4' lg='3' className='dash_img_wrapper' key={i}>
                <Link to={'recipe/' + item.id} style={{float: 'left'}}>
                  <div style={url_img(item.image)} className='dash_img' />
                  <div className='overlay'>
                    <div className='img_text'>{item.name}</div>
                  </div>
                </Link>
              </Col>
            ))}
          </Col>
        ))}
      </Container>
    </div>
  );
};

Dashboard.propTypes = {
  recipesList: PropTypes.array,
};

export default Dashboard;
