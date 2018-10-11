const Dotenv = require('dotenv-webpack');

// return a function from the config file
// the `env` variable will be a simple Object: { API_URL: 'http://localhost:8000' }
// it will contain all the environment variables (that we set in package.json) as key/value pairs

module.exports = () => {
	return {
		plugins: [ new Dotenv() ]
	};
};
