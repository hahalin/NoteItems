import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import * as actions from './actions';

const Sidebar = (props) => {
  return ( 
    <aside className="main-sidebar">
      <section className="sidebar">

        <div className="user-panel">
          <div className="pull-left image">
            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="" />
          </div>
          <div className="pull-left info">
            <p>Alexander Pierce</p>
            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>

        
        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">MAIN NAVIGATION</li>
          <li>
            <Link to="/"><i className="fa fa-home"></i>首頁</Link>
          </li>
          <li className="active treeview">
            <a href="#">
              <i className="fa fa-user"></i> <span>用戶登入</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul className="treeview-menu">
              <li>
                <Link to="/">Redux Auth</Link>
                <Link to="/signup">signup</Link>
                <Link to="/login">login</Link>
                <Link to="/signout">signout</Link>
                <Link to="/noteitems">noteitems</Link>
              </li>            
            </ul>
          </li>
        </ul>
      </section>

    </aside>
  );

}

function mapStateToProps(state){
  return {
      authenicated:state.auth.authenicated
  }
}


export default compose(
  connect(mapStateToProps,actions)
)(Sidebar);

