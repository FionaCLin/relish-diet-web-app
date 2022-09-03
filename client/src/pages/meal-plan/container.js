import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './connector.js'
import MealPlanner from './meal-plan'

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanner);
