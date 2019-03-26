import React from 'react';
import { connect } from 'react-redux';

import { readLists } from '../../actions';

import List from './List.js';

class ListNav extends React.Component {
  componentDidMount() {
    this.props.readLists();
  }

  render() {
    if (this.props.isGettingLists) {
      return (
        <div>
          <h1>Looking for Lists...</h1>
        </div>
      );
    }
    return (
      <div>
        {this.props.lists.map(list => {
          return <List key={list.id} list={list} />;
        })}
      </div>
    );
  }
}

const mapStateToPops = state => {
  console.log(state);
  return {
    lists: state.lists,
    isGettingLists: state.isGettingLists
  };
};

export default connect(
  mapStateToPops,
  { readLists }
)(ListNav);
