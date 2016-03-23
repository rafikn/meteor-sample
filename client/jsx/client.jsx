Meteor.startup(function() {

  const Router = ReactRouter.Router;
  const hashHistory = ReactRouter.hashHistory;
  const Route = ReactRouter.Route;
  const NotFoundRoute = ReactRouter.NotFoundRoute;

  const routes = (
    <Router history={hashHistory}>
      <Route path="/" component={Layout} >
        <ReactRouter.IndexRoute component={Main} />
        <Route path="/register" component={Register} />
        <Route path="/help" component={Help} />
        <Route path="/listItem" component={ListItem} />
        <Route path="*" component={NotFound} />

      </Route>
    </Router>
  );


  const app = document.getElementById('app');
  ReactDOM.render(routes, app);
});
