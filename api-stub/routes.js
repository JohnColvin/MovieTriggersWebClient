module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
	server.namespace('/api', function() {

		server.get('/movies', function(req, res) {
			var movies = {
			  "movies": [
			  	{
				    "id": 1,
				    "name": "Up"
				  },
				  {
				  	"id": 2,
				  	"name": "Blade Runner"
				  }
			  ]
			}
			res.send(movies);
		});

		// Return fixture data for '/api/posts/:id'
		server.get('/movies/:id', function(req, res) {
			var movie = {
					  "movie": {
					    "id": 1,
					    "name": "Up"
					  }
					};

			res.send(movie);
		});

	});

};