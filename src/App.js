import React,{Component} from 'react';
import axios from 'axios';

import { Button,Container,Row,Modal,Navbar,Spinner} from 'react-bootstrap';

import config from './config';
import Notes from './Components/Notes';
import NewNoteItemWin from './Components/NewNoteItemWin';

import Header from "./Header";
import Sidebar from "./Sidebar";

//const dotenv = require('dotenv');
//const env = dotenv.config().parsed;
//import './App.css';


class App extends Component {
  
  constructor(props){
    super(props);
    this.handleClose=this.handleClose.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    
    this.state = {
      openNewWin:false,
      notes:[],
      title:'',
      desc:'',
      loading:true
    }
  }
  
  componentWillMount()
  {
    return;
    this.getNotes();
  }

  getNotes(){
    
    axios.request({
      method:'get',
      url: config.apiUrl+'/notes/'
    }).then((response) => {
      this.setState({notes: response.data,loading:false}, () => {
        console.log(this.state);
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  handleClose(){
    this.setState({openNewWin:false});
  }

  handleChange(e){
    this.setState({[e.name]:e.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let title=this.state.title;
    let desc=this.state.desc;
    let $this=this;
    this.setState({loading:true,openNewWin:false});
    axios.post(
      config.apiUrl+'/notes', 
      {
        title: title,
        description: desc
      }
    )
    .then(function (response) {
      console.log(response);
      $this.getNotes();
    })
    .catch(function (error) {
      console.log(error);
      $this.setState({openNewWin:false,loading:false});
    });
  }

  doOpenNewWin(){
    this.setState({openNewWin:true,title:'',desc:''})
    //this.setState({openNewWin:true})
  }

  render(){


    return (
      <div className="wrapper">
        <Header/>
        <Sidebar/>
        <div className="content-wrapper">
           {this.props.children}
        </div>
      </div>
    );

    const {notes,openNewWin,loading}=this.state;
    return  (
        <div>
            <div>
              <Navbar bg="light">
                <Navbar.Brand href="#home">記事本-基本版</Navbar.Brand>
              </Navbar>
              <Container>
                <Row>
                  <Button variant="primary" onClick={()=>this.doOpenNewWin()}>新增記事</Button>
                </Row>
                {loading &&
                  <Row>
                    <Spinner animation="border" role="status">
                      <span className="sr-only">讀取中...</span>
                    </Spinner>
                  </Row>
                }          
                <Row>
                  {!loading && <Notes notes={this.state.notes} />}
                </Row>
                <NewNoteItemWin show={this.state.openNewWin} 
                  handleClose={this.handleClose} 
                  handleSubmit={this.handleSubmit}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  title={this.state.title} desc={this.state.desc}
                />
              </Container>
            </div>
          </div>
    )
  }
}

export default App;
