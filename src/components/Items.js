import React, {Component, PropTypes} from 'react';

export class Items extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadItems();
  }

  render() {
    const {items} = this.props;
    if (!items) {
      return <p>Loading...</p>;
    }

    const keys = Object.keys(items);
    return (
      <ul>
        {keys.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    );
  }
}

Items.propTypes = {
  items: PropTypes.object,
  loadItems: PropTypes.func.isRequired
};
