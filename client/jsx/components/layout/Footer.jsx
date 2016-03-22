class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
            <div className="row">

              <div className="col-md-3">
                <h4>Why buy ?</h4>
                <h5><a>Search</a></h5>
                <h5><a>Register</a></h5>
                <h5><a>Login</a></h5>
              </div>

              <div className="col-md-3">
                <h4>Community</h4>
                <h5><a>Help</a></h5>
                <h5><a>Bonds & Garantees</a></h5>
                <h5><a>Customer Support</a></h5>
              </div>

              <div className="col-md-3">
                <h4>About Us</h4>
                <h5><a>Our team</a></h5>
                <h5><a>Investors</a></h5>
                <h5><a>Contact Us</a></h5>
              </div>

              <div className="col-md-3">
                <h4>Follow Us</h4>
                <h5><a><i className="fa fa-facebook-official"></i> Facebook </a></h5>
                <h5><a><i className="fa fa-twitter-square"></i> Twitter </a></h5>
                <h5><a><i className="fa fa-linkedin-square"></i> LinkedIn </a></h5>
              </div>

            </div>
        </div>
      </footer>
    );
  }
}

this.Footer = Footer;
