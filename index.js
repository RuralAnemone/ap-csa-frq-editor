const express = require('express');
const path = require('path');
const app = express();
const port = process.env['PORT'] || 3000;

app.use("/", express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
	res.status(404).sendFile(`${process.cwd()}/public/404.html`)
});

app.listen(port, () => console.log("started"));