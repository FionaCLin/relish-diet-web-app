import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './connector.js';
import RecipeList from './RecipeList.js';

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
