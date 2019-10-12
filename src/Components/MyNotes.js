import React, { Component } from 'react';
import requireAuth from './requireAuth';
import axios from 'axios';
import config from '../config';
import Notes from './Notes';

class MyNotes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openNewWin: false,
      notes: [],
      title: '',
      desc: '',
      loading: true
    }
  }

  componentWillMount() {
    this.getNotes();
  }

  getNotes() {
    axios.request({
      method: 'get',
      url: config.apiUrl + '/notes/'
    }).then((response) => {
      this.setState({ notes: response.data, loading: false }, () => {
      });
    }).catch((error) => {
    });
  }

  render() {
    return (
      <section className="content">
        <div className="row">
          <div className="col-md-10">
            <div className="box box-info">
              <div className="box-header">
                <h3 className="box-title">My Notes</h3>
              </div>
              <div className="box-body">
                <Notes notes={this.state.notes}></Notes>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

//export default MyNotes;
export default requireAuth(MyNotes);