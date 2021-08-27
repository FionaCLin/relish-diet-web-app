import React from 'react';
import constants from '../../constants';
import {isUndefined} from 'util';
import Link from 'react-router-dom/Link';
import {Container, Row, Col, Modal, Button} from 'react-bootstrap';

// class RecipeList extends React.Component {
//   constructor(props) {
//     super(props);
//     let recipes = [];

//     if (this.props.list_type === constants.recipeList.BOOKMARK_LIST) {
//       let users = this.props.users;
//       let bookmarks = users.find((x) => x.id === this.props.curr_user).bookmarks;
//       this.props.recipeInfo.forEach((recipe) => {
//         if (!isUndefined(bookmarks.find((x) => x === recipe.id))) {
//           recipes.push(recipe.id);
//         }
//       });
//     } else {
//       this.props.recipeInfo.forEach((recipe) => {
//         if (recipe.creator === this.props.curr_user) {
//           recipes.push(recipe.id);
//         }
//       });
//     }

//   editRecipes = (recipes) => this.setState({recipes});

//   deleteRecipe = (e, recipeId) => {
//     e.preventDefault();
//     if (this.props.list_type === constants.recipeList.BOOKMARK_LIST) {
//       let users = this.props.users;
//       let bookmarks = users.find((x) => x.id === this.props.curr_user).bookmarks;
//       bookmarks.splice(bookmarks.indexOf(recipeId), 1);
//       console.log('DELETE', users);
//       this.props.editBookmark(users);
//     } else {
//       let recipeInfo = this.props.recipeInfo;
//       recipeInfo.splice(recipeInfo.indexOf(recipeInfo.find((x) => x.id === recipeId)), 1);
//       this.editRecipes(recipeInfo);
//     }
//     let {recipes} = this.state;
//     recipes.splice(recipes.indexOf(recipeId), 1);
//     this.setState({recipes});
//   };

const BookMark = (props) => {
  // let list_type = this.props.list_type;

  const {history} = props['0'];
  let pageTitle = props.pageTitle;

  let {recipes, users, showDialog, modalRecipe, changeModal, toggleDialog, deleteRecipe} = props;
  console.log(props);
  return (
    <div className='bg-white' style={{minHeight: '800px'}}>
      <Container className='pt-2 m-auto'>
        {/* {<!-- Modal -->} */}
        {showDialog && (
          <Modal show={toggleDialog} onHide={toggleDialog} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Remove Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Delete <strong>{modalRecipe.name}</strong> from
              {pageTitle === constants.recipeList.BOOKMARK_LIST ? 'bookmarked recipes' : 'my recipes'}?
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={toggleDialog}>
                Close
              </Button>
              <Button variant='danger' onClick={() => deleteRecipe(modalRecipe.id)}>
                Remove
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <Row className='justify-content-sm-between'>
          <Col md={4}>
            <h3>{pageTitle}</h3>
          </Col>
          <Col md={{span: 2, offset: 6}}></Col>
        </Row>
        <br />
        {recipes.map((recipe) => (
          <Row className='pt-2 justify-content-sm-between' key={recipe.id} style={{cursor: 'pointer'}}>
            <Col xs='2' md='3' lg='3' xl='3'>
              <img
                src={recipe.img[0]}
                alt='Avatar'
                className='dash_img'
                style={{width: '150px', height: '150px', margin: '0 auto'}}
                onClick={() => history.push(`recipe/${recipe.id}`)}
              />
            </Col>
            <Col className='py-2 text-black-50 text-capitalize'>
              <Row className='mr-md-4 pr-md-4 my-md-3 justify-content-xs-between'>
                <Col>
                  <h4 style={{display: 'inline'}} onClick={() => history.push(`recipe/${recipe.id}`)}>
                    {recipe.name + ' '}
                  </h4>
                  <span />
                  <div style={{display: 'inline', fontSize: '14px'}}>by {recipe.creatorName}</div>
                </Col>
                <Col>
                  <button
                    type='button'
                    onClick={() => changeModal(recipe)}
                    className='btn btn-danger btn-circle'
                    style={{float: 'right', marginTop: '5px'}}
                    data-toggle='modal'
                    data-target='#myModal'
                  >
                    <i className='glyphicon glyphicon-remove'></i>
                  </button>
                </Col>
              </Row>
              <Row>
                <div className='recipe_btn_content' style={{marginTop: '-15px'}}>
                  <div
                    className='panel panel-default'
                    onClick={() => history.push(`recipe/${recipe.id}`)}
                    style={{marginTop: '10px'}}
                  >
                    <table className='table table-bordered table-striped' style={{textAlign: 'center'}}>
                      <tbody>
                        <tr>
                          {constants.mealPlanner.macroNutrients.map((nutrient) => (
                            <td className='macro_col'>
                              {nutrient} {nutrient === 'Energy' ? '(kCal)' : '(g)'}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          {constants.mealPlanner.macroNutrients.map((nutrient) => (
                            <td className='macro_col'>{recipe.macros[nutrient]}</td>
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

export default BookMark;
