export default Ember.ArrayController.extend({
  searchTerm: '',
  content: function () {
    var term = this.get('searchTerm');
    if (term) {
      return this.store.find('movie', { q: term });
    }
    else {
      return [];
    }
  }.property('searchTerm')
});