import React from 'react';
import constants from '../../constants';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const RecipeList = (props) => {
  // let list_type = this.props.list_type;
  console.log(props)
  const navigate = useNavigate();
  let pageTitle = props.pageTitle;

  let { recipes, users, showDialog, modalRecipe, changeModal, toggleDialog, deleteRecipe } = props;
  console.log(props);
  return (
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
        <Col md={{ span: 2, offset: 6 }}>
          {pageTitle !== constants.recipeList.BOOKMARK_LIST && (
            <button onClick={() => navigate('/recipe')} className='btn btn-success'>
              Create Recipe
            </button>
          )}
        </Col>
      </Row>
      <br />
      {recipes.map((recipe) => (
        <Row className='pt-5 justify-content-sm-between' key={recipe.id}>
          <Col xs='12' md='3' lg='3' xl='3'>
            <img
              src={recipe.img[0]}
              alt='Avatar'
              className='recipe_img'
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            />
          </Col>
          <Col className='py-2 text-black-50 text-capitalize'>
            <Row>
              <div className='recipe-title mr-md-12 pr-md-12 my-md-12'>
                <h4 style={{ display: 'inline' }} onClick={() => navigate(`/recipe/${recipe.id}`)}>
                  {recipe.name + ' '}
                </h4>
              </div>
              <div className='recipe-title mr-md-12 pr-md-12 my-md-12'>
                {pageTitle !== constants.recipeList.BOOKMARK_LIST && (
                  <div style={{ display: 'inline', fontSize: '14px' }}>by {recipe.creatorName}</div>
                )}
              </div>
              <div className='recipe-title mr-md-12 pr-md-12 my-md-12'>
                {pageTitle !== constants.recipeList.BOOKMARK_LIST && (
                  <button
                    className='btn btn-danger btn-circle'
                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                  >
                    <i className='glyphicon glyphicon-remove'></i>
                  </button>
                )}
                <button
                  className='btn btn-success btn-circle'
                  onClick={() => history.push(`recipes/edit/${recipe.id}`)}
                >
                  <i className='glyphicon glyphicon-edit'></i>
                </button>
              </div>
            </Row>
            <Row>
              <div className='mr-md-12 pr-md-12 my-md-12'>
                <div className='recipe_btn_content' style={{ marginTop: '-15px' }}>
                  <div
                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                  >
                    <ul className='macro-list'>
                      {constants.mealPlanner.macroNutrients.map((nutrient) => (
                        <li>
                          <p><span className='name'>{nutrient} {nutrient === 'Energy' ? '(kCal)' : '(g)'} </span>

                            {recipe.macros[nutrient]}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default RecipeList;



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

//   render() {