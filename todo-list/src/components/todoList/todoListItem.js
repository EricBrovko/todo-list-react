import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isEditing: false
        }
    }

  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td className="task-actions">
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }

    return (
      <td className="task-actions">
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button>Delete</button>
      </td>
    );
  }

  renderTaskSection() {
    const { id, task, isCompleted } = this.props;

    if (this.state.isEditing) {
      return (
        <td className="task-actions">
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref={(input) => {
                this.editInput = { input, id };
              }}
            />
          </form>
        </td>
      );
    }

    return (
      <td className={`${isCompleted? 'is-completed' : ''}`}
          onClick={this.toggleTask.bind(this, this.props)}>{task}
      </td>
    );
  }

  toggleTask(props) {
    const itemProps = {
      id: props.id,
      task: props.task,
      isCompleted: !props.isCompleted
    };

    this.props.onToggleTask(itemProps)
  }

  onSaveClick(event) {
    event.preventDefault();
    this.props.onSaveTask(this.editInput)
    this.setState({ isEditing: false });
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onCancelClick() {
    this.setState({ isEditing: false });
  }

  render() {
    return (
        <tr className="task-row">
          {this.renderTaskSection()}
          {this.renderActionsSection()}
        </tr>
    );
  }
}

export default connect(
  store => ({
    store
  }),
  dispatch => ({
    onToggleTask: (taskProps) => {
      dispatch({ type: 'TOGGLE_TASK', task: taskProps })
    },
    onSaveTask: (newTask) => {
      const value = newTask.input.value;
      const id = newTask.id;
      const saveProps = { value, id };
      dispatch({ type: 'SAVE_TASK', task: saveProps })
    }
  })
)(TodoListItem);
