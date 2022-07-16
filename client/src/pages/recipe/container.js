import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './connector.js';
import RecipePage from './recipe-page.js';

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
