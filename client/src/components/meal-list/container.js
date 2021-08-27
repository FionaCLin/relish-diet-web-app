import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './connector.js'
import MealList from './meal-list.js'

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
