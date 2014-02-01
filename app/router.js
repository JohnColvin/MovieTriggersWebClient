 // ensure we don't share routes between all Router instances
var Router = Ember.Router.extend({
  location: 'history'
});

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.resource('titles', function () {
    this.route('title', {path: '/:title_id'});
  });
});

export default Router;
