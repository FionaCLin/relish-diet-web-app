import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './connector.js';
import Profile from './profile';

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
