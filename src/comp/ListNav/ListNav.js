import React from 'react';
import { connect } from 'react-redux';

import { readLists } from '../../actions';

import ListForm from './ListForm.js'
import List from './List.js';

import './list.css'

class ListNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      isGettingLists: false
    };
  }

  componentDidMount() {
    this.props.readLists();
  }

  render() {
    if (this.props.isGettingLists === true) {
      return (
        <div>
          <h2>Looking for Lists...</h2>
        </div>
      );
    }
    return (
      <div>
        <div>
          {this.props.lists.map(list => {
            return (
              <List
                id={list.id}
                title={list.title}
                description={list.description}
                key={list.id}
                list={list}
              />
            );
          })}
        </div>

        <div>
          <ListForm />
        </div>
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
