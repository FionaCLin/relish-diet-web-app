import React from 'react';
import constants from '../constants/';
import SearchInputForm from './SearchInputForm';
import { connect } from 'react-redux';
import { bg_img } from '../constants/helper.js';

const Dashboard = (props) => {
  console.log('render', props);
  return (
    <div>
      <SearchInputForm />
      {props.recipesList.map((item) => {
        return (
          <div className="dash_img_wrapper" style={{ float: "left" }} >
            <div style={bg_img(item.image)} onClick={(e) => props.onRecipeClick(e, item.id)} className="dash_img"></div>
            {/* <a href={"recipe/"+item.id+'.html'} className="overlay"> */}
            <div className="img_text">{item.name}</div>
            {/* </a> */}
          </div >

        )

      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('map state%%%%%%%%%%', state.dashboard)
  return {
    recipesList: state.dashboard[0].recipesList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRecipeClick(e, id) {
      // dispatch({type: constants.SELECT_RECIPE, select_id: id});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
