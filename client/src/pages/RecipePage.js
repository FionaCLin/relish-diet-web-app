import React from 'react';
import connect from 'react-redux';
import constants from '../constants';
import {isUndefined} from 'util';
import {recipeInfo, users, mealPlans, ingredientList, CURR_USER_ID} from '../constants/dummyData';

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    let recipeIndex = null;
    let recipe = null;
    console.log(this.props);
    // curr_user={CURR_USER_ID}
    // recipeInfo={this.state.recipes}
    // users={this.state.users}
    // addBookmark={(users) => this.setState({users})}
    // addComment={(recipes) => this.setState({recipes})}
    recipeInfo.map((item, index) => {
      if (item.id === 100) {
        recipeIndex = index;
        recipe = item;
      }
    });

    let bookmarked = !isUndefined(
      users.find((x) => x.id === CURR_USER_ID).bookmarks.find((y) => y === recipe.id),
    )
      ? true
      : false;

    this.state = {
      comment: {
        commentor: CURR_USER_ID,
        message: '',
        rating: 0,
      },
      recipe,
      recipeIndex,
      bookmarked,
    };
  }

  averageRating = () => {
    let rating = 0;
    this.state.recipe.comments.forEach((comment) => {
      rating += comment.rating;
    });
    return Math.round(rating / this.state.recipe.comments.length);
  };

  changeMessage = (e) => {
    e.preventDefault();
    let {comment} = this.state;
    comment.message = e.target.value;
    this.setState({comment});
  };

  addComment = (e) => {
    if (this.state.comment.message !== '') {
      let recipeInfo = this.props.recipeInfo;
      recipeInfo[this.state.recipeIndex].comments.unshift(this.state.comment);
      this.props.addComment(recipeInfo);
      this.clearComment();
    }
  };

  clearComment = () => {
    let comment = {
      commentor: 1,
      message: '',
      rating: 0,
    };
    this.setState({comment});
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
    return <span>{stars}</span>;
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
    let bookmarks = users.find((x) => x.id === CURR_USER_ID).bookmarks;
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
      <div class='body_container' textAlign='left'>
        <div class='recipeTitle'>
          <div style={{float: 'left'}}>
            <h4 style={{display: 'inline'}}>{recipe.name}</h4>&nbsp;
            <h6 style={{display: 'inline'}}>by {users.find((x) => x.id == recipe.creator).username}</h6>
          </div>
          {recipe.creator !== CURR_USER_ID ? (
            <button
              type='button'
              onClick={(e) => this.editBookMark(e)}
              class={bookmarked ? 'btn btn-success bookmarkBtn' : 'btn btn-default bookmarkBtn'}
            >
              <span className='glyphicon glyphicon-bookmark' aria-hidden='true'></span>
              {bookmarked ? '\xa0\xa0Bookmarked' : '\xa0\xa0Bookmark'}
            </button>
          ) : null}
        </div>
        <div class='mealPlannerForm'>
          <div class='recipeContent'>
            <div class='panel panel-default'>
              <table class='table table-bordered table-striped' style={{textAlign: 'center'}}>
                <tbody>
                  <tr>
                    {constants.mealPlanner.macroNutrients.map((nutrient) => {
                      let measure = nutrient === 'Energy' ? '(kJ)' : '(g)';
                      return (
                        <td>
                          {nutrient} {measure}
                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    {constants.mealPlanner.macroNutrients.map((nutrient) => {
                      return <td className='macro_col'>{recipe.macros[nutrient]}</td>;
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
            {/* < !--Ingredients--> */}
            <table class='table table-striped'>
              <tbody>
                <tr>
                  <td>Ingredients</td>
                </tr>
                <tr textAlign='left'>
                  <td>
                    <div class='ingredients' className='form-check'>
                      {recipe.ingredients.map((item) => {
                        return (
                          <div textAlign='left' width='100%'>
                            <input class='form-check-input' type='checkbox' value='' id='defaultCheck1' />
                            &nbsp;
                            <label class='form-check-label' for='defaultCheck1' style={{fontWeight: 'normal'}}>
                              {item}
                            </label>
                            <br />
                          </div>
                        );
                      })}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* <!--Method--> */}
            <table className='table table-striped'>
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
            </table>
          </div>
          {/* <!--Carousel--> */}
          <div style={{float: 'right'}}>
            <div
              id='myCarousel'
              className='carousel slide'
              data-
              ride='carousel'
              style={{width: '400px', height: '400px'}}
            >
              {/* < !--Indicators -- > */}
              <ol className='carousel-indicators'>
                {recipe.img.map((item, index) => {
                  let slide = JSON.stringify(index);
                  return <li data-target='#myCarousel' data-slide-to={slide} class={index === 0 ? 'active' : ''}></li>;
                })}
              </ol>

              {/* <!--Wrapper for slides-- > */}
              <div className='carousel-inner'>
                {recipe.img.map((item, index) => {
                  console.log(item);
                  return (
                    <div className={index === 0 ? 'item active' : 'item'}>
                      <img src={'../' + item} style={{width: '400px', height: '400px'}} alt='img'></img>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* <!--Average star rating-- > */}
        <br />
        <div style={{float: 'left', width: '100%', textAlign: 'center', fontSize: '40px'}}>
          {this.fillStar(this.averageRating(), false)}
        </div>
        {/* <!--Comment box-- > */}
        <h4>Comments</h4>
        {recipe.creator !== CURR_USER_ID ? (
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
                    <div style={{fontSize: '18px', marginTop: '10px', marginLeft: '10px'}}>
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
                <span>{users.find((x) => x.id == comment.commentor).username}</span>
                <div style={{float: 'right', fontSize: '18px'}}>{this.fillStar(comment.rating, false)}</div>
              </div>
              <div style={{marginTop: '10px'}}>{comment.message}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RecipePage;
