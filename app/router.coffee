Router = Em.Router.extend location: 'history'

Router.map ->
  this.resource 'movies', ->
    this.resource 'movie', path: '/:movie_id'

`export default Router`
