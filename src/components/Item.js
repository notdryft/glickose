import React, {Component, PropTypes} from 'react';
import {Label, ListGroupItem} from 'react-bootstrap';

export class Item extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props;
    return (
      <ListGroupItem>
        {item.get('name')} <Label>{item.get('rating')}</Label>
      </ListGroupItem>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired
};
