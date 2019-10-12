import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Logout extends Component{

    componentDidMount(){
        this.props.logout();
        this.props.history.push("/");
    }

    render(){
        return(
            <div>
                <h3>登出頁</h3>
            </div>
        )
    }
    
}

export default connect(null,actions)(Logout);