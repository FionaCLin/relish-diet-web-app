import React from 'react';
import constants from '../constants/dashboardConst';
import { connect } from 'react-redux';
import { getDashboardRecipesByKeword } from '../reducers/dashboard';

const SearchInputForm = (props) => {
  return (
    <div className="input-group">
      <input type="text" value={props.inputValue} onChange={props.handleSearchChange} className="form-control" placeholder="Search from hundreds of recipes!" />
      <span className="input-group-btn">
        <button onClick={(e)=>props.onSeachClick(e)} className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
      </span>
    </div>
  )
};


const mapStateToProps = (state) => {
  return {
    inputValue: state.searchInputValue
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchChange(e) {
      dispatch({ type: constants.SEARCH_TEXT_CHANGED, searchtext: e.target.value });
    },
    onSeachClick(e) {
      dispatch(getDashboardRecipesByKeword);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInputForm);
