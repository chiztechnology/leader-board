const scores = [{ id: 1, name: 'will', score: 144 }, { id: 2, name: 'gloria', score: 98 }, { id: 3, name: 'john', score: 102 }];

const addscore = score => {
  return scores.push(score);
};

const loadScore = () => {
  return scores;
};

const showScore = (score, DOMContainer) => {
  DOMContainer.innerHTML += `<div class='item'>
  <h3>${score.name}: ${score.score}</h3>
</div>`;
};

exports.addscore = addscore;
exports.loadScore = loadScore;
exports.showScore = showScore;