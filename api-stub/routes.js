module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
	server.namespace('/api', function() {

		server.get('/titles', function(req, res) {
			var titles = {
			  "titles": [
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
			res.send(titles);
		});

		// Return fixture data for '/api/posts/:id'
		server.get('/titles/:id', function(req, res) {
			var title = {
					  "title": {
					    "id": 1,
					    "name": "Up"
					  }
					};

			res.send(title);
		});

	});

};