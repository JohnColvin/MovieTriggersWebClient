module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
	server.namespace('/api', function() {

		server.get('/movies', function(req, res) {
			var movies = {
			  "movies": [
			  	{
				    "id": 1,
				    "name": "Up",
				    "year": "2009",
				    "poster_url": "http://content7.flixster.com/movie/10/89/43/10894361_det.jpg"
				  },
				  {
				  	"id": 2,
				  	"name": "Blade Runner",
				  	"year": "1982",
				  	"poster_url": "http://content9.flixster.com/movie/11/16/67/11166783_det.jpg"
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
					    "name": "Up",
					    "year": "2009",
					    "poster_url": "http://content7.flixster.com/movie/10/89/43/10894361_det.jpg"
					  }
					};

			res.send(movie);
		});

	});

};