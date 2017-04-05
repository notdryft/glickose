import {connect} from 'react-redux';

import {Items} from '../components/Items';
import {loadItems, updateItem} from '../actions/items';

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  loadItems() {
    dispatch(loadItems());
  },
  updateItem(name) {
    dispatch(updateItem(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
