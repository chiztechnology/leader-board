const scores = [{ id: 1, name: 'will', score: 144 }, { id: 2, name: 'gloria', score: 98 }, { id: 3, name: 'john', score: 102 }];

const addscore = (score) => scores.push(score);

const loadScore = () => scores;

const showScore = (score, DOMContainer) => {
  DOMContainer.innerHTML += `<div class='item'>
  <h4>${score.user}: ${score.score}</h4>
</div>`;
};

exports.addscore = addscore;
exports.loadScore = loadScore;
exports.showScore = showScore;