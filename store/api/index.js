
const axios = require('axios')
const data = require('./mock-data')
const LATENCY = 16

function axiosURL(url){
    // axios.defaults.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content')
    // return (window._backpack_url || '') + '/api/' + url
    return url
}

export function getAllNotes (cb) {
  setTimeout(() => {

      axios
      .get(axiosURL('notes'))
        .then(response => (
            cb(response.data)
        ))

  }, LATENCY)
}

export function createNote ({ id, author, title, content, color }, cb) {
    const note = {
        id,
        author,
        title,
        content,
        color,
    }
    setTimeout(function () {
        cb(note)
    }, LATENCY)
}
