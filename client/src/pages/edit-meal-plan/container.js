import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './connector.js'
import EditMealPlanner from './edit-meal-planner'

export default connect(mapStateToProps, mapDispatchToProps)(EditMealPlanner);
