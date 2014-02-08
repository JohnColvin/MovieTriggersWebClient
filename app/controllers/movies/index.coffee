MoviesIndexController = Em.ArrayController.extend
  searchTerm: ''
  searchInProgress: ''

  searchTermChanged: (->
    @set 'searchInProgress', true
    Ember.run.debounce @, @search, 400
  ).observes 'searchTerm'

  search: ->
    term = @get 'searchTerm'
    movies = []
    if term
      movies = @store.find 'movie', { q: term }
      that = this
      movies.then -> that.searchCompleted()
    else
      @searchCompleted()

    @set 'content', movies

  searchCompleted: ->
    this.set 'searchInProgress', false

  searchMessage: (->
    prefix = if @get 'searchInProgress'
      'Searching'
    else
      if @get 'content.length'
        'Results'
      else
        'No results'

    prefix + ' for movies titled '
  ).property 'searchInProgress', 'content.length'

  actions:
    goToMovie: (id) ->
      this.transitionToRoute 'movies.movie', id

`export default MoviesIndexController`