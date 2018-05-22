import React from 'react';
import connect from 'react-redux'

const RecipePage = (props) => {
  return (
    <div className="body_container">
      <div style={{ marginBottom: "10px", float: "left", width: "100%" }}>
        <div style={{ float: "left" }}>
          <h4 style={{ display: "inline" }}>Popeye toast with eggs</h4>&nbsp;
          <h6 style={{ display: "inline" }}>by Loreen</h6>
        </div>
        <div id="bookmark" style={{ display: "block" }}>
          <button type="button" onclick="javascript:SwapDivsWithClick('bookmark','bookmarked')" className="btn btn-default" style={{ float: "right", fontSize: "small", width: "150px" }}>
            <span className="glyphicon glyphicon-bookmark" aria-hidden="true"></span> Bookmark
                </button>
        </div>
        <div id="bookmarked" style={{ display: "none" }}>
          <button type="button" onclick="javascript:SwapDivsWithClick('bookmark','bookmarked')" className="btn btn-success" style={{ float: "right", fontSize: "small", width: "150px" }}>
            <span className="glyphicon glyphicon-bookmark" aria-hidden="true"></span> Bookmarked </button>
        </div>
      </div>
      <div style={{ float: "left", width: "100%" }}>
        <div style={{ float: "left", width: "70%", paddingRight: "20px" }}>
          {/* < !--Macros--> */}
          <div className="panel panel-default">
            <table className="table table-bordered table-striped" style={{ textAlign: "center" }}>
              <tbody><tr>
                <td>Kilojoules (kJ)</td>
                <td>Carbohydrates (g)</td>
                <td>Protein (g)</td>
                <td>Fats (g)</td>
                <td>Sodium (g)</td>
              </tr>
                <tr>
                  <td className="macro_col">1025</td>
                  <td className="macro_col">32</td>
                  <td className="macro_col">24</td>
                  <td className="macro_col">15</td>
                  <td className="macro_col">2</td>
                </tr>
              </tbody></table>
          </div >
          {/* < !--Ingredients--> */}
          <table className="table table-striped">
            <tbody><tr><td>Ingredients</td></tr>
              <tr><td>
                <div className="form-check">

                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  &nbsp;<label className="form-check-label" for="defaultCheck1" style={{ fontWeight: "normal" }}>
                    160g cherry tomatoes
                  </label>
                  <br />
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  &nbsp;<label className="form-check-label" for="defaultCheck1" style={{ fontWeight: "normal" }}>
                    4 slices of wholemeal bread
                  </label>
                  <br />
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  &nbsp;<label className="form-check-label" for="defaultCheck1" style={{ fontWeight: "normal" }}>
                    3 large eggs
                  </label>
                  <br />
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  &nbsp;<label className="form-check-label" for="defaultCheck1" style={{ fontWeight: "normal" }}>
                    80g baby spinach
                  </label>
                  <br />

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
                  <li>Preheat the grill to high.</li>
                  <li>Lay the tomato vines in a large baking tray, prick each tomato with the tip of a sharp knife and grill for 4 minutes, then add the bread to the tray to toast on both sides.</li>
                  <li>Meanwhile, crack 1 egg into a blender, add the ham, spinach, a good pinch of black pepper and the milk and blitz until smooth. </li>
                  <li>Take the tray from under the grill and divide the green eggy mixture between the four pieces of toast, spreading it right out to the edges. </li>
                  <li>Dry fry the remaining 2 eggs in a non-stick frying pan on a medium heat, covering the pan with a lid to steam and coddle the eggs on the top – cook to your liking.</li>
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
              <li data-target="#myCarousel" data-slide-to="0" className=""></li>
              <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="2" className=""></li>
            </ol>

            {/* <!--Wrapper for slides-- > */}
            <div className="carousel-inner">
              <div className="item">
                <img src="images/recipe.jpg" style={{ width: "400px", height: "400px" }} alt="Los Angeles" />
              </div>
              <div className="item active">
                <img src="images/recipe2.png" style={{ width: "400px", height: "400px" }} alt="Chicago" />
              </div>
              <div className="item">
                <img src="images/recipe3.jpg" style={{ width: "400px", height: "400px" }} alt="New York" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Average star rating-- > */}
      <br />
      <div style={{ float: "left", width: "100%", textAlign: "center", fontSize: "40px" }}>
        <span className="glyphicon glyphicon-star green_star"></span>
        <span className="glyphicon glyphicon-star green_star"></span>
        <span className="glyphicon glyphicon-star green_star"></span>
        <span className="glyphicon glyphicon-star-empty"></span>
        <span className="glyphicon glyphicon-star-empty"></span>
      </div>
      {/* <!--Comment box-- > */}
      <h4>Comments</h4>
      <table className="table table-striped">
        <tbody><tr><td>
          <div className="form-group" style={{ paddingTop: "15px" }}>
            <textarea className="form-control" rows="5" id="comment" placeholder="Add a comment..."></textarea>
            <div style={{ fontSize: "18px", marginTop: "10px", marginLeft: "10px" }}>
              <span style={{ fontSize: "14px" }}>Rating: </span>
              <span className="glyphicon glyphicon-star-empty"></span>
              <span className="glyphicon glyphicon-star-empty"></span>
              <span className="glyphicon glyphicon-star-empty"></span>
              <span className="glyphicon glyphicon-star-empty"></span>
              <span className="glyphicon glyphicon-star-empty"></span>
              <span style={{ float: "right" }}><button className="btn btn-default" type="submit">Post</button></span>
            </div>
          </div>
        </td>
        </tr>
        </tbody >
      </table >
      {/* < !--Comments--> */}
      <div className="list-group-item list-group-item-action comment">
        <div>
          <span >MarySue</span>
          <div style={{ float: "right", fontSize: "18px" }} s>
            <span className="glyphicon glyphicon-star green_star"></span>
            <span className="glyphicon glyphicon-star green_star"></span>
            <span className="glyphicon glyphicon-star green_star"></span>
            <span className="glyphicon glyphicon-star-empty"></span>
            <span className="glyphicon glyphicon-star-empty"></span>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          Was a great meal, but my husband found it a little bit salty.
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
