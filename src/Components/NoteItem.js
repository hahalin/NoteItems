import React, { Component } from 'react';


class NoteItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: props.note
    }
  }

  render() {
    return (
        <tr name={this.state.note._id.$oid}>
          <td></td>
          <td>{this.state.note.title}</td>
          <td>{this.state.note.description}</td>
          <td></td>
        </tr>
    );
  }
}

export default NoteItem;
