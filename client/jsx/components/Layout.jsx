class Layout extends React.Component {

  render() {
    return (
        <div className="fill">
          <Header />
          <div className="fill">
            {this.props.children}
          </div>
          <Footer />
        </div>
    );
  }
}

this.Layout = Layout;
