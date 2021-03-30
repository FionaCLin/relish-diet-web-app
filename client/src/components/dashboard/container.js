import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './connector.js';
import Dashboard from './Dashboard.js';

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
