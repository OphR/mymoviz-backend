var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const TMDB_API_KEY = `720fe93eb9c28d934f3bd694ce04cb5b`;

router.get('/movies', (req, res) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`)
 .then(response => response.json())
 .then(data => {
   res.json({ movies: data.results });
 });
});

module.exports = router;