Router = Em.Router.extend location: 'history'

Router.map ->
  this.resource 'movies', ->
    this.resource 'movie', path: '/:movie_id', ->
      this.resource 'warning', path: 'warnings/:warning_id'

`export default Router`
