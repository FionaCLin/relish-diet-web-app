import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './connector.js';
import EditRecipe from './edit-recipe.js';

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe);
