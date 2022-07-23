import React from 'react';
import SearchInputForm from '../SearchInputForm';
import {url_img} from '../../constants/globalFunctions';
import {Link} from 'react-router-dom';
import {Container, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Dashboard = ({recipesList, loading, onRecipeClick}) => {
  const numPerRow = 3;
  return (
    <Container className='pt-2 m-auto page-wrapper'>
      <SearchInputForm />
      {loading && <div>loading: {`${loading}`}</div>}
      {!loading &&
        recipesList.map((item, index) => (
          <Col sm='12' md='4' lg='3' className='dash_img_wrapper' key={item.id}>
            <Link to={'recipe/' + item.id} style={{float: 'left'}}>
              <img src={`http://localhost:3000/images/${item.images[0].url}`} className='dash_img' />
              <div className='overlay'>
                <div className='img_text'>{item.title}</div>
              </div>
            </Link>
          </Col>
        ))}
    </Container>
  );
};

Dashboard.propTypes = {
  recipesList: PropTypes.array,
};

export default Dashboard;
