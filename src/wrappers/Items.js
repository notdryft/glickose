import {connect} from 'react-redux';

import {Items} from '../components/Items';
import {loadItems} from '../actions/items';

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  loadItems() {
    dispatch(loadItems());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
