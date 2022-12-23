const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = '';

const sendData = (baseUrl, data) => {
  fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};


const getData = baseUrl => {

  fetch(baseUrl + gameId + '/scores/', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const postScore = (baseUrl, data) => {

  fetch(baseUrl + gameId + '/scores/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
