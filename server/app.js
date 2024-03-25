const express = require('express');
const path = require('path');
const compression = require('compression');
const etag = require('etag');

const app = express();

app.use(express.static(path.join(__dirname, '../webperf-practice-2')));

app.use(compression());

app.get('/custom-route', (req, res) => {
    res.send('This is a custom route');
});

app.use((req, res, next) => {
    res.set('ETag', etag(req.url));
    next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});