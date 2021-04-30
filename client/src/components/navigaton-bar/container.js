import {connect} from 'react-redux';
import {mapStateToProps} from './connector.js';
import NavigationBar from './NavigationBar.js';

export default connect(mapStateToProps)(NavigationBar);
