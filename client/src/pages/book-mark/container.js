import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './connector.js';
import BookMark from './book-mark.js';

export default connect(mapStateToProps, mapDispatchToProps)(BookMark);
