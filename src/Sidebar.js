import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {

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
          <li className="active treeview">
            <a href="#">
              <i className="fa fa-dashboard"></i> <span>Dashboard</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul className="treeview-menu">
              <li>
                <Link to="/">Redux Auth</Link>
                <Link to="/signup">signup</Link>
                <Link to="/signin">signin</Link>
                <Link to="/signout">signout</Link>
                <Link to="/noteitems">noteitems</Link>
              </li>            
            </ul>
          </li>
          <li className="treeview">
            <a href="#">
              <i className="fa fa-files-o"></i>
              <span>Layout Options</span>
              <span className="pull-right-container">
                <span className="label label-primary pull-right">4</span>
              </span>
            </a>
            
          </li>
        
        </ul>
      </section>

    </aside>
  );

}

export default Sidebar;