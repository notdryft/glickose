import React, {Component, PropTypes} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

import {compute} from '../maths/rating';

export class Combinations extends Component {

  constructor(props) {
    super(props);
    this.compute = this.compute.bind(this);
  }

  compute(names, index) {
    const {items, updateItems} = this.props;

    const winner = items.get(names.get(index));
    const loosers = names.splice(index, 1).map(name => items.get(name));
    const score = new Array(names.size - 1).fill(1);

    const updatedWinner = compute(winner, loosers, score);
    const updatedLoosers = loosers.map(looser => {
      const loosingScore = new Array(names.size - 1).fill(0);
      return compute(looser, loosers.set(index - 1, winner), loosingScore);
    });

    updateItems(updatedLoosers.unshift(updatedWinner));
  }

  render() {
    const {combination, combinations} = this.props;
    if (combinations.size <= combination) {
      return (
        <p>Finished!</p>
      );
    }

    const items = combinations.get(combination);
    return (
      <ButtonGroup block vertical>
        {items.map((item, index) =>
          <Button key={index} onClick={() => this.compute(items, index)}>{item}</Button>
        )}
      </ButtonGroup>
    );
  }
}

Combinations.propTypes = {
  combination: PropTypes.number.isRequired,
  combinations: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  updateItems: PropTypes.func.isRequired
};
