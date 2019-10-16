import React, { Component } from 'react';
import { Button, Container, Row, Modal, Navbar, Spinner } from 'react-bootstrap';
import requireAuth from './requireAuth';
import axios from 'axios';
import config from '../config';
import Notes from './Notes';
import NewNoteItemWin from './NewNoteItemWin';

class MyNotes extends Component {

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    const header = { Authorization: `${localStorage.getItem('token')}` };
    axios.request({
      method: 'get',
      url: config.apiUrl + '/notes/',
      headers: header,
    }).then((response) => {
      this.setState({ notes: response.data, loading: false }, () => {
      });
    }).catch((error) => {
      console.log(error);
      
    });
  }

  handleClose() {
    this.setState({ openNewWin: false });
  }

  handleChange(e) {
    this.setState({ [e.name]: e.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let title = this.state.title;
    let desc = this.state.desc;
    let $this = this;
    this.setState({ loading: true, openNewWin: false });
    axios.post(
        config.apiUrl + '/notes',
        {
          title: title,
          description: desc
        }
        ,{headers:{ Authorization: `${localStorage.getItem('token')}` }}
      )
      .then(function (response) {
        $this.getNotes();
      })
      .catch(function (error) {
        if (error.response.status===401){
          alert('未經認證的操作');
        }
        $this.setState({ openNewWin: false, loading: false });
      });
  }

  doOpenNewWin() {
    this.setState({ openNewWin: true, title: '', desc: '' })
  }

  render() {
    const { notes, openNewWin, loading } = this.state;
    return (
      <div>
        
        <section className="content">

          <div className="row">
            <div className="col-md-10">
              <div className="box box-info">
                <div className="box-header">
                  <h3 className="box-title">My Notes</h3>
                </div>
                <div className="box-header">
                  <Button variant="primary" onClick={() => this.doOpenNewWin()}>新增記事</Button>
                </div>
                <div className="box-body">
                  {loading &&
                    <Spinner animation="border" role="status">
                      <span className="sr-only">讀取中...</span>
                    </Spinner>
                  }
                  {!loading && <Notes notes={this.state.notes} />}
                </div>
              </div>
            </div>

          </div>

          <div className="row">
            <NewNoteItemWin show={this.state.openNewWin}
              handleClose={this.handleClose}
              handleSubmit={this.handleSubmit}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              title={this.state.title} desc={this.state.desc}
            />
          </div>
        </section>
      </div>
    );
  }
}

//export default MyNotes;
export default requireAuth(MyNotes);