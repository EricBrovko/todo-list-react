import React from 'react';

export default class TodoListHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th className="col-sm-10">Tasks</th>
          <th className="col-sm-2">Actions</th>
        </tr>
      </thead>
    );
  }
}
