import React, { Component } from 'react';
import { Table} from 'react-bootstrap';

import NoteItem from './NoteItem';

class Notes extends Component {
  render() {
    let noteItems;
    if(this.props.notes){
      noteItems = this.props.notes.map(note => {
        return (
          <NoteItem key={note._id.$oid} note={note} />
        );
      });
    }
    return (
      <Table striped bordered hover>
        <thead>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </thead>
          <tbody>
            {noteItems}
          </tbody>
      </Table>
    );
  }
}

export default Notes;
