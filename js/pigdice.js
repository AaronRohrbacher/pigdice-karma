function Player(name, rollArr, turnScore, currentScore) {
  this.name = name;
  this.rollArr = [];
  this.turnScore = 0;
  this.currentScore = 0;
}

Player.prototype.roll = function(){
  var dice = Math.floor(Math.random() * (7-1)) +1;
  if (dice === 1) {
    alert("You rolled a one, beautiful!");
    this.score(0);
    return 0;
  } else {
    this.turnScore += dice;
    return dice;
  }
}


Player.prototype.score = function(score){
  this.currentScore += score;
  this.turnScore = 0;
}
Player.prototype.winner = function(score){
  var current = this.currentScore;
  if(current + score >= 20){
    player1.turnScore = 0;
    player1.currentScore = 0;
    player2.turnScore = 0;
    player2.currentScore = 0;
  alert(this.name + " wins! With a score of: " + (current + score));
  }
}
exports.pigdiceModule = Player;
