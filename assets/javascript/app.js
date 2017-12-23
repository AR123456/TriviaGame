$(document).ready(function(){

$("#start-game").on('click',function(){
  game.start();
});

$(document).on('click','#end',function(){
    game.done();
})
  var questions = [
    {
      question: "What is the main ingredient of a mince pie?",
      choices:["Fruit", "Tofu","Vegetables", "Potatoes"],
      indexCorrect:0
    },
    {
      question: "How many different flavors of jelly beans exist?",
      choices:["50", "190","100", "30"],
      indexCorrect:0
    }
  ];

var game ={
  correctAnswers: 0,
  incorrectAnswers: 0,
  counter: 5,
  countdown: function(){
    game.counter--;
    $("#counter").html(game.counter);
    if(game.counter<=0){
      console.log("Time is up!");
      game.done();
    }
  },
  start: function(){
    timer = setInterval(game.countdown,1000);
    $("#game-action").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>' );
    $("#start-game").remove();
    for (var i = 0; i < questions.length; i++) {
      $("#game-action").append("<h2>" +questions[i].question+"</h2>");
      for (var m = 0; m < questions[i].choices.length; m++) {
      $("#game-action").append("<input type= radio name= question- "+i+"value=  "+questions[i].choices[m]+" > "+questions[i].choices[m]);
      }
     }
     $("#game-action").append('<br><button id="end"> Done</button>');
   },
  done: function(){
    $.each($("input[name= 'question-0']:checked"),function(){
        if ($(this).val() == questions[0].indexCorrect) {
          game.correctAnswers++;
      }else{
        game.incorrectAnswers++;
      }
    });

    $.each($("input[name= 'question-1']:checked"),function(){
      if ($(this).val() == questions[1].indexCorrect) {
        game.correctAnswers++;
    }else{
      game.incorrectAnswers++;
    }
  });
  $.each($("input[name= 'question-2']:checked"),function(){
    if ($(this).val() == questions[2].indexCorrect) {
      game.correctAnswers++;
  }else{
    game.incorrectAnswers++;
  }
});

  this.result();
  },
  
  result: function(){
    clearInterval(timer);
    $('#game-action  h2').remove();
    $('#game-action').html("<h2> You are done! </h2>");
    
    $('#game-action').append("<h3>Correct Answers: " +this.correctAnswers+ "</h3>");
    $('#game-action').append("<h3>InCorrect Answers: " +this.incorrectAnswers+ "</h3>");
    $('#game-action').append("<h3>Unanswered: " +(questions.length-(this.incorrectAnswers+this.correctAnswers))+"</h3>");
  }

}

 

// NO CODE BELOW THIS LINE
});
