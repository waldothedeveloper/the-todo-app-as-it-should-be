const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/root', (req, res) => {
	res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
