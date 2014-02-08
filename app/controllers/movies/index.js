export default Ember.ArrayController.extend({
  searchTerm: '',
  searchInProgress: '',

  searchTermChanged: function () {
    this.set('searchInProgress', true);
    Ember.run.debounce(this, this.search, 400);
  }.observes('searchTerm'),

  search: function () {
    var term = this.get('searchTerm');
    var movies = [];
    if (term) {
      movies = this.store.find('movie', { q: term });
      var that = this;
      movies.then(function () {
        that.searchCompleted();
      });
    }
    else {
      this.searchCompleted();
    }
    this.set('content', movies);
  },

  searchCompleted: function () {
    this.set('searchInProgress', false);
  },

  searchMessage: function () {
    var prefix = '';
    if (this.get('searchInProgress')) {
      prefix = 'Searching';
    } else {
      if (this.get('content.length')) {
        prefix = 'Results';
      } else {
        prefix = 'No results';
      }
    }
    return prefix + ' for movies titled ';
  }.property('searchInProgress', 'content.length'),

  actions: {
    goToMovie: function (id) {
      this.transitionToRoute('movies.movie', id);
    }
  }
});
