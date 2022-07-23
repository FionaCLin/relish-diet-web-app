import React from 'react';
import constants from '../../constants';
import {isUndefined} from 'util';
import {CURR_USER_ID, recipeInfo, users} from '../../constants/dummyData';
import {Container, Card, Row, Col, Table} from 'react-bootstrap';

class RecipePage extends React.Component {
  constructor(props) {
    super({...props[0], curr_user: CURR_USER_ID, recipeInfo, users});
    let recipeIndex = null;
    let recipe = null;
    console.log(props, this.props);
    this.props.recipeInfo.forEach((item, index) => {
      if (item.id === parseInt(this.props.match.params.id, 10)) {
        recipeIndex = index;
        recipe = item;
      }
    });

    // let bookmarked = !isUndefined(
    //   this.props.users.find((x) => x.id === this.props.curr_user).bookmarks.find((y) => y === recipe.id),
    // )
    //   ? true
    //   : false;
    let bookmarked = true;
    this.state = {
      comment: {
        commentor: this.props.curr_user,
        message: '',
        rating: 0,
      },
      recipe,
      recipeIndex,
      bookmarked,
    };
  }

  averageRating = () => {
    const {comments} = this.state.recipe;
    const rating = comments.reduce((acc, {rating}) => (acc += rating), 0);
    return Math.round(rating / comments.length);
  };

  changeMessage = (e) => {
    e.preventDefault();
    let {comment} = this.state;
    comment.message = e.target.value;
    this.setState({comment});
  };

  addComment = (e) => {
    if (this.state.comment.message === '') return;
    let recipeInfo = this.props.recipeInfo;
    recipeInfo[this.state.recipeIndex].comments.unshift(this.state.comment);
    this.props.addComment(recipeInfo);
    this.clearComment();
  };

  clearComment = () => {
    this.setState({
      comment: {
        commentor: 1,
        message: '',
        rating: 0,
      },
    });
  };

  fillStar = (number, clickable) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      let starType = i < number ? 'glyphicon glyphicon-star green_star' : 'glyphicon glyphicon-star-empty';
      let star = clickable ? (
        <span id={JSON.stringify(i + 1)} onClick={(e) => this.changeRating(e)} className={starType}></span>
      ) : (
        <span className={starType}></span>
      );
      stars.push(star);
    }
    return stars;
  };

  changeRating = (e) => {
    e.preventDefault();
    let {comment} = this.state;
    comment.rating = parseInt(e.target.id, 10);
    this.setState({comment});
  };

  editBookMark = (e) => {
    e.preventDefault();
    let {bookmarked} = this.state;
    bookmarked = !bookmarked;

    let users = this.props.users;
    let bookmarks = users.find((x) => x.id === this.props.curr_user).bookmarks;
    if (bookmarked) {
      bookmarks.unshift(this.state.recipe.id);
      console.log('HERE', users);
    } else {
      bookmarks.splice(bookmarks.indexOf(this.state.recipe.id), 1);
    }
    this.props.addBookmark(users);
    this.setState({bookmarked});
    console.log('enter');
  };

  render() {
    let {comment, recipe, bookmarked} = this.state;

    return (
      <Container className='pt-2 m-auto'>
        <Card>
          <Card.Header className='justify-content-around py-0 '>
            <Row className='justify-content-center align-items-center'>
              <Col className='text-black-50 text-capitalize'>
                {recipe.name}&nbsp;
                {this.props.users && <h6>by {this.props.users.find((x) => x.id === recipe.creator).username}</h6>}
              </Col>
              <Col>
                {recipe.creator !== this.props.curr_user ? (
                  <button
                    className={`text-black-50 text-capitalize btn btn${
                      bookmarked ? '-success bookmarkBtn' : '-default bookmarkBtn'
                    }`}
                    type='button'
                    onClick={(e) => this.editBookMark(e)}
                  >
                    <span className='glyphicon glyphicon-bookmark' aria-hidden='true'></span>
                    {`\xa0\xa0Bookmark${bookmarked ? 'ed' : ''}`}
                  </button>
                ) : null}
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className='px-4'>
            <Row className=''>
              <Col sm={12} md={7} lg={8} xl={8}>
                <div className='panel panel-default'>
                  <Table responsive className='text-center table-bordered table-striped'>
                    <thead>
                      <tr>
                        {constants.mealPlanner.macroNutrients.map((nutrient) => (
                          <th>
                            {nutrient}
                            {`${nutrient === 'Energy' ? '(kJ)' : '(g)'}`}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr></tr>
                      <tr>
                        {constants.mealPlanner.macroNutrients.map((nutrient) => (
                          <td className='macro_col'>{recipe.macros[nutrient]}</td>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
                </div>
                {/* < !--Ingredients--> */}
                <Table responsive className='table table-striped'>
                  <tbody>
                    <tr>
                      <td>Ingredients</td>
                    </tr>
                    <tr textAlign='left'>
                      <td className='ingredients'>
                        <ul>
                          {recipe.ingredients.map((item, index) => (
                            <li> {item} </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                {/* <!--Method--> */}
                <Table responsive className='table table-striped'>
                  <tbody>
                    <tr>
                      <td>Method</td>
                    </tr>
                    <tr>
                      <td>
                        <ol>
                          {recipe.method.split('\n').map((step) => {
                            return <li>{step}</li>;
                          })}
                        </ol>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              {/* <!--Carousel--> */}
              <Col sm={12} md={5} lg={4} xl={4}>
                <div id='myCarousel' className='carousel slide' data-ride='carousel' style={{objectFit: 'cover'}}>
                  {/* < !--Indicators -- > */}
                  <ol className='carousel-indicators'>
                    {recipe.img.map((item, index) => {
                      let slide = JSON.stringify(index);
                      return (
                        <li data-target='#myCarousel' data-slide-to={slide} class={index === 0 ? 'active' : ''}></li>
                      );
                    })}
                  </ol>

                  {/* <!--Wrapper for slides-- > */}
                  <div className='carousel-inner'>
                    {recipe.img.map((item, index) => {
                      console.log(item);
                      return (
                        <div className={index === 0 ? 'item active' : 'item'}>
                          <img src={'../' + item} style={{width: '100%', height: '100%'}} alt='img'></img>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Body>
            <Card.Title>
              <Row className='justify-content-around align-content-center'>
                <Col>
                  <h4>Comments</h4>
                </Col>
                <Col style={{display: 'flex'}} className='justify-content-end'>
                  Average Rating: {this.fillStar(this.averageRating(), false)}
                </Col>
              </Row>
            </Card.Title>

            {recipe.creator !== this.props.curr_user ? (
              <table className='table table-striped'>
                <tbody>
                  <tr>
                    <td>
                      <div className='form-group' style={{paddingTop: '15px'}}>
                        <textarea
                          className='form-control'
                          rows='5'
                          id='comment'
                          value={comment.message}
                          onChange={(e) => this.changeMessage(e)}
                          placeholder='Add a comment...'
                        ></textarea>
                        <div
                          style={{
                            fontSize: '18px',
                            marginTop: '10px',
                            marginLeft: '10px',
                          }}
                        >
                          <span style={{fontSize: '14px'}}>Rating: </span>
                          <span>{this.fillStar(comment.rating, true)}</span>
                          <span style={{float: 'right'}}>
                            <button className='btn btn-default' onClick={(e) => this.addComment(e)} type='submit'>
                              Post
                            </button>
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : null}
            {/* < !--Comments--> */}
            {recipe.comments.map((comment) => {
              return (
                <div className='list-group-item list-group-item-action comment'>
                  <div>
                    {this.props.users && (
                      <span>{this.props.users.find((x) => x.id === comment.commentor).username}</span>
                    )}
                    <div
                      style={{
                        float: 'right',
                        fontSize: '18px',
                      }}
                    >
                      {this.fillStar(comment.rating, false)}
                    </div>
                  </div>
                  <div style={{marginTop: '10px'}}>{comment.message}</div>
                </div>
              );
            })}
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default RecipePage;
