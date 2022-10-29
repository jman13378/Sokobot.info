const got = require('got');
const hookUrl = 'https://api.hookrelay.dev/hooks/zo6ngj0q2vknhxvdy8r74351/3fd08ebfc7dad54ae94b5174';
got.post(hookUrl, {
  json: {
	  message: 'Hello from Hook Relay!'
  },
}).json()
  .then(body => console.log(body));
