import React from 'react';
import SearchInputForm from '../SearchInputForm';
import {url_img} from '../../constants/globalFunctions';
import {Link} from 'react-router-dom';
import {Container, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import Loader from '../../components/loader';

const Dashboard = ({recipesList, loading, onRecipeClick}) => {
  const numPerRow = 3;

  const navigate = useNavigate();
  return (
    <Container className='pt-2 m-auto page-wrapper'>
      <SearchInputForm />
      {loading && <Loader />}
      {!loading &&
        recipesList.map((item) => (
          <Col sm='12' md='4' lg='3' className='dash_img_wrapper' key={item.id}>
            <div onClick={(e) => onRecipeClick(navigate, item.id)}>
              <img src={`http://localhost:3000/images/${item.images[0].url}`} className='dash_img' />
              <div className='overlay'>
                <div className='img_text'>{item.title}</div>
              </div>
            </div>
          </Col>
        ))}
    </Container>
  );
};

Dashboard.propTypes = {
  recipesList: PropTypes.array,
};

export default Dashboard;
