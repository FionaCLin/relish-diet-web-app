import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './connector.js';
import RecipeList from './recipe-list.js';

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
