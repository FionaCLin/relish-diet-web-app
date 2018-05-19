
import React from 'react';
import { connect } from 'react-redux';
import constants from './store/constants';
import Footer from './Footer.js'
// import api from './api.js';
import axios from 'axios';

function RepoSearch(props) {
  return (
    <div>
      <h1>Repo Search</h1>

      <form onSubmit={(e) => props.handleSubmit(e, props.inputValue)} >
        <input value={props.inputValue} onChange={props.handleInputChange} />
      </form>
      <Footer />
      <ul>
        {props.repos.map((repo) => {
          return <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>;
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.searchInputValue,
    repos: state.repos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange: (e) => {
      console.log('handle input change');
      dispatch({ type: constants.SEARCH_INPUT_CHANGE, value: e.target.value });
    },
    handleSubmit: (e, query) => {
      e.preventDefault();
      // api.getRepos(dispatch, query)

      axios.get(`https://api.github.com/search/repositories?q=${query}`)
        .then(function (response) {
          console.log('AXIOS RESPONSE', response);
          dispatch({ type: constants.SET__REPOS, repos: response.data.items });

        })
        .catch(function (error) {
          console.log(error);
        });

      console.log('submit');
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoSearch);
