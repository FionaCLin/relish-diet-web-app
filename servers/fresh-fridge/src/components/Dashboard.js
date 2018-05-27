import React from 'react';
import constants from '../constants/';
import SearchInputForm from './SearchInputForm';
import { connect } from 'react-redux';
import bg_img from '../constants/globalFunctions';
import Link from 'react-router-dom/Link';
import api from '../api.js';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentWillMount () {
    const dashRecipes = (result) => {
      this.setState({recipes: result});
    }

    api.getDashboardWithGoal(this.props.user.id, [constants.mealPlanner.sortDiet[this.props.user.goal]], dashRecipes);
  }

  render() {
    return (
          <div className="body_container">
            <SearchInputForm />
            {this.state.recipes.map((item) => {
              return (
                <Link to={"recipe/" + item.id} className="dash_img_wrapper" style={{ float: "left" }} >
                  <div style={bg_img(item.images.split(',')[0])} className="dash_img"></div>
                    <div className="overlay">
                      <div className="img_text">{item.name}</div>
                    </div>
                  </Link>
              )
            })}
          </div>
        )
  }
}

export default Dashboard;
