import {connect} from 'react-redux';
import {mapStateToProps} from './connector.js';
import NavigationBar from './navigation-bar.js';

export default connect(mapStateToProps)(NavigationBar);
