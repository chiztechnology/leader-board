const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'tJAkpDn19v9jdXxYOHzZ';

const createGame = (data) => {
  fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

const getData = async () => fetch(`${baseUrl}${gameId}/scores/`).then((response) => response.json());

const postScore = async (data) => fetch(`${baseUrl}${gameId}/scores/`,
  {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json());

exports.getData = getData;
exports.postScore = postScore;
exports.createGame = createGame;