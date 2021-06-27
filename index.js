var btns = $("div[type='button']");
var gameOver = true;
var gameSeq = [];
var playerSeq = [];
var level = 1;

$(document).keypress(function(){
  if(gameOver===true){
    gameOver = false;
    startGame();
  }
});

btns.click(function(){
  myGame($(this));
});

function startGame(){
  playerSeq = [];
  gameSeq = [];
  $('h1').text("level "+level);
  var rndbtn = btns.eq(Math.floor(Math.random()*4));
  btnClick(rndbtn)
  gameSeq.push(rndbtn.attr('id'));
}

function myGame(btn){
  btnClick(btn);
  playerSeq.push(btn.attr('id'));
  if(playerSeq[playerSeq.length-1] === gameSeq[playerSeq.length-1]){
    ;
  }else{
    playerSeq = [];
    gameSeq = [];
    gameOver = true;
    level = 1;
    var snd = new Audio("sounds/wrong.mp3");
    snd.play();
    $('h1').text("Game Over. Press any key to start");
    return;
  }
  if(gameSeq.length === playerSeq.length){
    level++;
    setTimeout(function(){$('h1').text('level '+level)},200);
    playerSeq = []
    var rndbtn = btns.eq(Math.floor(Math.random()*4));
    setTimeout(function(){btnClick(rndbtn);},500);
    gameSeq.push(rndbtn.attr('id'));
  }
}


function btnClick(btn){
  var bt = btn.addClass('pressed');
  var snd = new Audio("sounds/"+btn.attr('id') + ".mp3");
  snd.play();
  setTimeout(function(){bt.removeClass('pressed');},100);
}
