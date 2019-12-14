import React from 'react';
import connect from 'react-redux';
import constants from '../constants';
import { isUndefined } from 'util';
import api from '../api.js';

class RecipePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: {
        commentor: this.props.curr_user,
        message: '',
        rating: 0
      },
      recipe: {
        ingredients: [],
        reviews: [],
        method: '',
        images: '',
        bookmarked: NaN
      },
    }
  }

  componentWillMount() {
    const callback = (recipe) => {
      this.setState({recipe});
      console.log("RECIPE", recipe);
    };
    api.getRecipe(this.props.match.params.id, callback);
  }

  averageRating = () => {
    let rating = 0;
    this.state.recipe.reviews.forEach(review => {
      rating += review.rating;
    });
    return Math.round(rating/this.state.recipe.reviews.length);
  }

  changeMessage = (e) => {
    e.preventDefault();
    let { comment } = this.state;
    comment.message = e.target.value;
    this.setState({comment});
  }

  addComment = (e) => {
    if (this.state.comment.message !== '') {
      let comment = {
        recipe_id: this.state.recipe.id,
        memberno: this.props.user.id,
        content: this.state.comment.message,
        likes: this.state.comment.rating
      };

      let receiveComment = (result) => {
        let recipe = this.state.recipe;
        recipe.reviews.unshift(result);
        this.setState({recipe});
      }

      api.addComment(this.state.recipe.id, comment, receiveComment);
      this.clearComment();
    }
  }

  clearComment = () => {
    let comment = {
      commentor: 1,
      message: '',
      rating: 0
    };
    this.setState({comment});
  }

  fillStar = (number, clickable) => {
    let stars = [];
    for (let i=0;i<5;i++) {
      let starType = (i < number) ? "glyphicon glyphicon-star green_star" : "glyphicon glyphicon-star-empty";
      let star = (clickable) ? <span id={JSON.stringify(i + 1)} onClick={(e) => this.changeRating(e)} className={starType}></span> : <span className={starType}></span>;
      stars.push(star);
    }
    return <span>{stars}</span>
  }

  changeRating = (e) => {
    e.preventDefault();
    let { comment } = this.state;
    comment.rating = parseInt(e.target.id, 10);
    this.setState({comment});
  }

  ingredientStringify = (ingredient) => {
    return ingredient.amount + ' ' + ingredient.uom + ' of ' + ingredient.name;
  }

  editBookMark = (e) => {
    e.preventDefault();
    let { bookmarked } = this.state;
    let resetBookmark = null;
    let recipe = null;

    if (isNaN(bookmarked)) {
      resetBookmark = (result) => {
        recipe = this.state.recipe;
        recipe.bookmarked = result.id;
        this.setState({recipe});
      }
      api.addBookmark(this.props.user.id, this.state.recipe.id, resetBookmark);
    } else {
      api.deleteBookmark(this.props.user.id, this.state.recipe.bookmarked);
      recipe = this.state.recipe;
      recipe.bookmarked = NaN;
      this.setState({recipe});
    }
  }

  render() {
    let { comment, recipe } = this.state;
    return (
      <div class="body_container" textAlign="left">
      <div class="recipeTitle">
        <div style={{ float: "left" }}>
          <h4 style={{ display: "inline" }}>{recipe.name}</h4>&nbsp;
        </div>
          { (recipe.memberno !== this.props.user.id) ?
          <button type="button" onClick={(e) => this.editBookMark(e)} class={ !isNaN(recipe.bookmarked) ? "btn btn-success bookmarkBtn" : "btn btn-default bookmarkBtn"}>
            <span className="glyphicon glyphicon-bookmark" aria-hidden="true"></span>{ !isNaN(recipe.bookmarked) ? "\xa0\xa0Bookmarked" : "\xa0\xa0Bookmark"}
          </button> : null
          }

      </div>
      <div class="mealPlannerForm">
        <div class="recipeContent">
          <div class="panel panel-default">
            <table class="table table-bordered table-striped" style={{textAlign:"center"}}>
              <tbody><tr>
                {
                  constants.mealPlanner.macroNutrients.map((nutrient) => {
                    let measure = (nutrient === 'Energy') ? "(kCal)" : "(g)";
                    return <td>{nutrient} {measure}</td>
                  })
                }
              </tr>
              <tr>
                <td className="macro_col">{recipe.calories}</td>
                <td className="macro_col">{recipe.cabs}</td>
                <td className="macro_col">{recipe.fat}</td>
                <td className="macro_col">{recipe.protein}</td>
                <td className="macro_col">{recipe.sodium}</td>
              </tr>
              </tbody></table>
          </div >
          {/* < !--Ingredients--> */}
          <table class="table table-striped">
            <tbody><tr><td>Ingredients</td></tr>
              <tr textAlign="left"><td>
                <div class="ingredients" className="form-check">
                  {
                    recipe.ingredients.map((item) => {
                      return (<div textAlign="left" width="100%">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                &nbsp;<label class="form-check-label" for="defaultCheck1" style={{ fontWeight: "normal" }}>
                                  { this.ingredientStringify(item) }
                                </label>
                                <br />
                              </div>);
                    })
                  }
                </div>
              </td>
              </tr>
            </tbody>
          </table>

          {/* <!--Method--> */}
          <table className="table table-striped">
            <tbody><tr><td>Method</td></tr>
              <tr><td>
                <ol>
                {
                  recipe.method.split("\n").map((step) => {
                    return <li>{step}</li>
                  })
                }
                </ol>
              </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!--Carousel--> */}
        <div style={{ float: "right" }}>
          <div id="myCarousel" className="carousel slide" data- ride="carousel" style={{ width: "400px", height: "400px" }}>
            {/* < !--Indicators -- > */}
            <ol className="carousel-indicators">
                {
                  recipe.images.split(",").map((item, index) => {
                      let slide = JSON.stringify(index);
                      return <li data-target="#myCarousel" data-slide-to={slide} class={(index === 0) ? "active" : ""}></li>
                    }
                  )
                }
            </ol>

            {/* <!--Wrapper for slides-- > */}
            <div className="carousel-inner">
                {
                  recipe.images.split(",").map((item, index) => {
                    return <div className={(index === 0) ? "item active" : "item"}>
                              <img src={"../../" + item} style={{ width: "400px", height: "400px" }} alt="img"></img>
                            </div>
                  })
                }
            </div>
          </div>
        </div>
      </div>
      {/* <!--Average star rating-- > */}
      <br />
      <div style={{ float: "left", width: "100%", textAlign: "center", fontSize: "40px" }}>{ this.fillStar(this.averageRating(), false) }</div>
      {/* <!--Comment box-- > */}
      <h4>Comments</h4>
      { (recipe.memberno !== this.props.user.id) ?
      <table className="table table-striped">
        <tbody><tr><td>
          <div className="form-group" style={{ paddingTop: "15px" }}>
            <textarea className="form-control" rows="5" id="comment" value={comment.message} onChange={(e) => this.changeMessage(e)} placeholder="Add a comment..."></textarea>
            <div style={{ fontSize: "18px", marginTop: "10px", marginLeft: "10px" }}>
              <span style={{ fontSize: "14px" }}>Rating: </span>
              <span>{ this.fillStar(comment.likes, true) }</span>
              <span style={{ float: "right" }}><button className="btn btn-default" onClick={(e) => this.addComment(e)} type="submit">Post</button></span>
            </div>
          </div>
        </td>
        </tr>
        </tbody >
      </table > : null }
      {/* < !--Comments--> */}
        {
          recipe.reviews.map((review) => {
            return  <div className="list-group-item list-group-item-action comment">
                      <div>
                        <span>Username</span>
                        <div style={{ float: "right", fontSize: "18px" }}>{ this.fillStar(review.likes, false) }</div>
                      </div>
                      <div style={{ marginTop: "10px" }}>{review.message}</div>
                    </div>
          })
        }
    </div>
    )
  }
}

export default RecipePage;
