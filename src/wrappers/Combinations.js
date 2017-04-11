import {connect} from 'react-redux';

import {increment} from '../actions/combination';
import {updateItems} from '../actions/items';
import {Combinations} from '../components/Combinations';

const mapStateToProps = state => ({
  combinations: state.combinations,
  combination: state.combination,
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  updateItems(items) {
    dispatch(updateItems(items));
    dispatch(increment());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Combinations);
