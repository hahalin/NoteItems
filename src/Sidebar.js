import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from './actions';

class Sidebar extends Component {

  renderLinks() {
    if (this.props.authenicated) {
      return (
        <ul className="treeview-menu">
          <li>
            <Link to="/MyNotes">我的記事</Link>
          </li>
          <li>
            <Link to="/logout">登出</Link>
          </li>

        </ul>
      )
    }
    else {
      return (
        <ul className="treeview-menu">
          <li>
            <Link to="/login">登入</Link>
          </li>
        </ul>
      )
    }
  }

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">

          <div className="user-panel">
            <div className="pull-left image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="" />
            </div>
            <div className="pull-left info">
              <p>###</p>
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
              {
                this.renderLinks()
              }
            </li>
          </ul>
        </section>
      </aside>
    );
  }

}

function mapStateToProps(state) {
  return {
    authenicated: state.auth.authenicated
  }
}

export default connect(mapStateToProps)(Sidebar);

