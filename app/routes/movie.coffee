MovieRoute = Em.Route.extend
  model: (params) ->
    this.store.find 'movie', params.movie_id

`export default MovieRoute`