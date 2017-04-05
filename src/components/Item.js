import React, {Component, PropTypes} from 'react';
import {Button, Label} from 'react-bootstrap';

export class Item extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
  }

  render() {
    const {item, updateItem} = this.props;
    return (
      <Button block bsSize="large"
              onClick={() => updateItem(item.get('name'))}>
        {item.get('name')} <Label>{item.get('rating')}</Label>
      </Button>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  updateItem: PropTypes.func.isRequired
};
