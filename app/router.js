 // ensure we don't share routes between all Router instances
var Router = Ember.Router.extend({
  location: 'history'
});

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.resource('movies', function () {
    this.route('movie', {path: '/:movie_id'});
  });
});

export default Router;
