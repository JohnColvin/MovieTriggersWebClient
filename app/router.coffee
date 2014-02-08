Router = Em.Router.extend location: 'history'

Router.map ->
  this.resource 'movies', ->
    this.route 'movie', { path: '/:movie_id' }

`export default Router`
