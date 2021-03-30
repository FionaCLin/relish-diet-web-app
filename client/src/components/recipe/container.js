import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './connector.js';
import RecipePage from './RecipePage.js';

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
