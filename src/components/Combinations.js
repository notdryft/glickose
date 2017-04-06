import React, {Component, PropTypes} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

export class Combinations extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(name) {
    const {combination, combinations, incrementCombination} = this.props;
    const items = combinations.get(combination);
    console.log(items.get(name));
    incrementCombination();
  }

  render() {
    const {combination, combinations} = this.props;
    const items = combinations.get(combination);
    return (
      <ButtonGroup block vertical>
        <Button onClick={() => this.onClick('blue')}>{items.get('blue')}</Button>
        <Button onClick={() => this.onClick('red')}>{items.get('red')}</Button>
      </ButtonGroup>
    );
  }
}

Combinations.propTypes = {
  combination: PropTypes.number.isRequired,
  combinations: PropTypes.object.isRequired,
  incrementCombination: PropTypes.func.isRequired
};
