if (Meteor.isClient) {
  Meteor.startup(function() {
    const app = document.getElementById('app');
    ReactDOM.render(<Layout/>, app);
  });
}
