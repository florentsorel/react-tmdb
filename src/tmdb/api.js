import axios from 'axios'
import API_KEY from './api_key'

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

const params = '?api_key=' + API_KEY

function searchTvShow (query) {
  return tmdb.get('/search/tv' + params + '&query=' + query)
}

function findTvShow (tvId) {
  return tmdb.get('/tv/' + tvId + params)
}

function findSeason (tvId, seasonNumber) {
  return tmdb.get('/tv/' + tvId + '/season/' + seasonNumber + params)
}

export default {
  search: function (query) {
    return searchTvShow(query)
  },
  find: function (tvShowId) {
    return findTvShow(tvShowId)
  },
  findSeason: function (tvShowId, seasonNumber) {
    return findSeason(tvShowId, seasonNumber)
  }
}