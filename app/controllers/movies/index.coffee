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
    prefix = switch @get('searchStatus')
      when 'searching' then 'Searching'
      when 'have-results' then 'Results'
      else 'No results'

    prefix + ' for movies titled '
  ).property 'searchStatus'

  searchStatus: (->
    if @get 'searchInProgress'
      'searching'
    else if @get 'content.length'
      'have-results'
    else
      'no-results'
  ).property 'searchInProgress', 'content.length'

  actions:
    goToMovie: (id) ->
      this.transitionToRoute 'movie', id

`export default MoviesIndexController`