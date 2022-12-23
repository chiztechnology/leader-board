import './index.css';
import { loadScore, addscore, showScore } from './modules/score';

const DOMContainer = document.querySelector('.data-source');
window.onload = () => {
  // Fetch scores
  const scores = loadScore();
  scores.forEach(score => {
    showScore(score, DOMContainer);
  });
};

document.getElementById('refresh-btn').onclick = () => {
  // clear current items
  DOMContainer.innerHTML = ``;
  // Fetch scores
  const scores = loadScore();
  scores.forEach(score => {
    showScore(score, DOMContainer);
  });
};

document.getElementById('form').onsubmit = (e) => {
  e.preventDefault();
  const scores = loadScore();
  const id = scores.length > 0 ? scores[scores.length - 1].id + 1 : 1;
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const obj = { id: id, name: name, score: score };
  addscore(obj);
  showScore(obj, DOMContainer);
}