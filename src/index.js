import './index.css';
import { getData, postScore } from './modules/api-connect.js';
import { showScore } from './modules/score.js';

const DOMContainer = document.querySelector('.data-source');
window.onload = () => {
  // Fetch scores
  getData().then((response) => {
    response.result.forEach((score) => {
      showScore(score, DOMContainer);
    });
  });
};

document.getElementById('refresh-btn').onclick = () => {
  // clear current items
  DOMContainer.innerHTML = '';
  // Fetch scores
  getData().then((response) => {
    response.result.forEach((score) => {
      showScore(score, DOMContainer);
    });
  });
};

document.getElementById('form').onsubmit = (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const obj = { user, score };
  postScore(obj).then(() => {
    showScore(obj, DOMContainer);
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
  });
};