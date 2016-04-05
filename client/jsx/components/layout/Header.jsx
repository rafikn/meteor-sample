import React from 'react'
import { Router, Route, Link } from 'react-router'

export default class Header extends React.Component {

  collapseMenu() {
    jQuery('#myNavbar').collapse('hide');
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-default">
         <div className="container">
           <div className="navbar-header">
             <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
             </button>
             <Link to="/">
                 <img alt="WhyBuy" src="/img/logo-white.png" className="logo"/>
             </Link>
           </div>
           <div className="collapse navbar-collapse" id="myNavbar">
             <ul className="nav navbar-nav navbar-right">
               <li onClick={this.collapseMenu.bind(this)}><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login </a></li>
               <li onClick={this.collapseMenu.bind(this)}><Link to="/register"><span className="glyphicon glyphicon-user"></span> Register </Link></li>
               <li onClick={this.collapseMenu.bind(this)}><Link to="/help"><span className="glyphicon glyphicon-question-sign"></span> Help </Link></li>
               <li onClick={this.collapseMenu.bind(this)}><Link to="/listItem"><span className="glyphicon glyphicon-ok-sign"></span> List an Item </Link></li>
               <li onClick={this.collapseMenu.bind(this)}><Link to="/browse"><span className="glyphicon glyphicon-ok-sign"></span> Browse </Link></li>
             </ul>
           </div>
         </div>
        </nav>
      </header>
    );
  }
}
