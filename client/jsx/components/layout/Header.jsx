class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                <img src="/img/logo-black.png" alt="whybuy" className="logo"/>
              </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">List an item</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

this.Header = Header;
