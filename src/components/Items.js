import React, {Component, PropTypes} from 'react';
import {Col} from 'react-bootstrap';

import {Item} from './Item';

export class Items extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadItems();
  }

  render() {
    const {items, updateItem} = this.props;
    if (!items) {
      return <p>Loading...</p>;
    }

    const sorted = items.sort((a,b) => a.get('rating') < b.get('rating'));
    return (
      <Col xs={12} sm={8}>
        {sorted.valueSeq().map((item, index) =>
          <Item key={index} item={item} updateItem={updateItem}/>
        )}
      </Col>
    );
  }
}

Items.propTypes = {
  items: PropTypes.object,
  loadItems: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired
};
