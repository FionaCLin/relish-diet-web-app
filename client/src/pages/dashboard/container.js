import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './connector.js';
import Dashboard from './dash-board.js';

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
