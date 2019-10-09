import React, { Component } from 'react';
import axios from 'axios';
import config from '../config';
import Notes from './Notes';

export default class MyNotes extends Component {

    constructor(props){
        super(props);
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
      this.getNotes();
    }

    getNotes(){
        axios.request({
          method:'get',
          url: config.apiUrl+'/notes/'
        }).then((response) => {
          this.setState({notes: response.data,loading:false}, () => {
          });
        }).catch((error) => {
        });
    }
 
    render() {
        return( 
          <Notes notes={this.state.notes}></Notes>
        );
    }
}
