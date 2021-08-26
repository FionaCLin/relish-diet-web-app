import React from 'react';
import constants from '../../constants';
import {bg_img} from '../../constants/globalFunctions';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

const MealList = ({modalPlan, mealPlans, changeModal, deletePlan}) => {
  return (
    <div className='bg-white' style={{minHeight: '800px'}}>
      <Container className='pt-2 m-auto'>
        {/* <!-- Modal --> */}
        <div id='myModal' className='modal fade' role='dialog'>
          <div className='modal-dialog'>
            {/* <!-- Modal content--> */}
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal'>
                  &times;
                </button>
                <h4 className='modal-title'>Remove Meal Plan</h4>
              </div>
              <div className='modal-body'>
                <p>Delete '{modalPlan.name}' from your meal plans?</p>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-dismiss='modal'>
                  Cancel
                </button>
                <button
                  type='button'
                  onClick={(e) => deletePlan(e, modalPlan.id)}
                  className='btn btn-danger'
                  data-dismiss='modal'
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <Row className='justify-content-sm-between'>
          <Col md={4}>
            <h3>My Meal Plans</h3>
          </Col>
          <Col md={{span: 2, offset: 6}}>
            <Link to='mealplan/add'>
              <button type='button' className='btn btn-success'>
                Create Meal Plan
              </button>
            </Link>
          </Col>
        </Row>
        {mealPlans.map((plan, index) => (
          <Row
            className='pt-2 m-auto list-group-item list-group-item-action recipe_btn justify-content-space-between'
            key={index}
            style={{cursor: 'pointer'}}
          >
            <Col
              md={3}
              className='d-flex justify-content-center'
              onClick={() => console.log('mealplan/view/' + plan.id)}
            >
              <table
                className='table table-bordered'
                style={{marginLeft: '5px', width: '150px', height: '150px', float: 'left'}}
              >
                <tbody>
                  <tr>
                    <td style={bg_img(plan.img[0])} className='tile_img'></td>
                    <td style={bg_img(plan.img[1])} className='tile_img'></td>
                  </tr>
                  <tr>
                    <td style={bg_img(plan.img[2])} className='tile_img'></td>
                    <td style={bg_img(plan.img[3])} className='tile_img'></td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col md={9}>
              <Row className='d-flex flex-row-reverse'>
                <button
                  type='button'
                  onClick={(e) => changeModal(e, plan)}
                  className='btn btn-danger btn-circle'
                  style={{float: 'right', marginTop: '5px'}}
                  data-toggle='modal'
                  data-target='#myModal'
                >
                  <i className='glyphicon glyphicon-remove'></i>
                </button>
                <button
                  type='button'
                  className='btn btn-success btn-circle'
                  onClick={() => console.log('mealplan/edit/' + plan.id)}
                  style={{float: 'right', marginTop: '5px', marginRight: '10px'}}
                >
                  <i className='glyphicon glyphicon-edit'></i>
                </button>
              </Row>
              <Row className='d-flex flex-row'>
                <div className='recipe_btn_content' style={{marginTop: '-15px'}}>
                  <h4 style={{display: 'inline'}}>{plan.name}</h4>
                  <span></span>
                  <div className='panel panel-default' style={{marginTop: '10px'}}>
                    <table className='table table-bordered table-striped' style={{textAlign: 'center'}}>
                      <tbody>
                        <tr>
                          {constants.mealPlanner.macroNutrients.map((nutrient) => (
                            <td className='macro_col' key={nutrient}>
                              {nutrient} {nutrient === 'Energy' ? '(kCal)' : '(g)'}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          {constants.mealPlanner.macroNutrients.map((nutrient) => (
                            <td className='macro_col' key={nutrient}>
                              {plan.macros[nutrient]}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};
MealList.propTypes = {};
export default MealList;
