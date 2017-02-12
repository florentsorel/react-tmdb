var axios = require('axios');

var API_KEY = require('./api_key');

var tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

var params = '?api_key=' + API_KEY;

function searchTvShow(query) {
  return tmdb.get('/search/tv' + params + '&query=' + query)
}

function findTvShow(tvId) {
  return tmdb.get('/tv/' + tvId + params);
}

module.exports = {
  search: function(query) {
    return searchTvShow(query);
  },
  find: function(tvShowId) {
    return findTvShow(tvShowId);
  }
}