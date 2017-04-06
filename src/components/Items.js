import React, {Component, PropTypes} from 'react';
import {ListGroup, Panel} from 'react-bootstrap';

import {Item} from './Item';

export class Items extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {items} = this.props;
    const sorted = items.sort((a, b) => a.get('rating') < b.get('rating'));
    return (
      <Panel>
        <ListGroup fill>
          {sorted.valueSeq().map((item, index) =>
            <Item key={index} item={item}/>
          )}
        </ListGroup>
      </Panel>
    );
  }
}

Items.propTypes = {
  items: PropTypes.object
};
