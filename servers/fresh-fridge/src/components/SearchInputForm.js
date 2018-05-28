import React from 'react';
import constants from '../constants/dashboardConst';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import api from '../api';

class SearchInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  changeSearch = (e) => {
    e.preventDefault();
    let { search } = this.state;
    search = e.target.value;
    this.setState({search});
  }

  // onClickSearch = (e) => {
  //   e.preventDefault();
  //   console.log(this.state, '#####');
  //   console.log(this.state.search, '#####');
  //   this.state.userID = 1;
  //   api.dashboardSearch(this.state.userID, this.state.search, (res) => {
  //     console.log(res);
  //     // this.setState({})
  //   })
  // }

  render() {
    return (
      <div className="input-group">
        <input type="text" value={this.state.search} onChange={(e) => this.changeSearch(e)} className="form-control" placeholder="Search from hundreds of recipes!" />
        <span className="input-group-btn">
          <Link to={(this.state.search == '') ? "/search" : "/search/name/" + this.state.search}><button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button></Link>
        </span>
      </div>
    )
  }
}

export default SearchInputForm;

// const mapStateToProps = (state) => {
//   return {
//     inputValue: state.searchInputValue
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleSearchChange(e) {
//       console.log('input change');
//       dispatch({ type: constants.SEARCH_TEXT_CHANGED, searchtext: e.target.value });
//     },
//     onSeachClick(e) {
//       console.log('input click');
//       dispatch({ type: constants.SEARCH_CLICK, searchtext: e.target.value });
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SearchInputForm);
