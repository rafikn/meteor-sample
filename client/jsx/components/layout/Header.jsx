const Link = ReactRouter.Link;

class Header extends React.Component {
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
             <a className="navbar-brand" href="#">
               <img alt="WhyBuy" src="/img/logo-white.png" className="logo"/>
             </a>
           </div>
           <div className="collapse navbar-collapse" id="myNavbar">
             <ul className="nav navbar-nav navbar-right">
               <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login </a></li>
               <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Register </Link></li>
               <li><Link to="/help"><span className="glyphicon glyphicon-question-sign"></span> Help </Link></li>
               <li><Link to="/listItem"><span className="glyphicon glyphicon-ok-sign"></span> List an Item </Link></li>
             </ul>
           </div>
         </div>
        </nav>
      </header>
    );
  }
}

this.Header = Header;
