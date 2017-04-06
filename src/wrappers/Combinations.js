import {connect} from 'react-redux';

import {incrementCombination} from '../actions/combination';
import {Combinations} from '../components/Combinations';

const mapStateToProps = state => ({
  combinations: state.combinations,
  combination: state.combination
});

const mapDispatchToProps = dispatch => ({
  incrementCombination() {
    dispatch(incrementCombination());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Combinations);
