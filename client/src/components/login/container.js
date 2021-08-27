import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './connector.js'
import Login from './login.js'

export default connect(mapStateToProps, mapDispatchToProps)(Login);
