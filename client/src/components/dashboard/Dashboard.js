import React from "react";
import SearchInputForm from "../SearchInputForm";
import {url_img} from "../../constants/globalFunctions";
import {Link} from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div>
      <div className="body_container">
        <SearchInputForm />
      </div>
      <div className="container">
        {props.recipesList.map((item, index) => {
          return (
            <Link
              to={"recipe/" + item.id}
              className="dash_img_wrapper"
              style={{ float: "left" }}
              key={index}
            >
              <div style={url_img(item.image)} className="dash_img"></div>
              <div className="overlay">
                <div className="img_text">{item.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default Dashboard
