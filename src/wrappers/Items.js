import {connect} from 'react-redux';

import {Items} from '../components/Items';

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps)(Items);
