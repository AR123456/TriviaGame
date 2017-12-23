//gets page ready to play
$(document).ready(function(){
//start game button 
$("#start-game").on('click',function(){
  game.start();
});
//done button 
$(document).on('click','#end',function(){
  game.done();
})
// object array with choices array 
  var questions = [
    {
      question: "What is the main ingredient of a mince pie?",
      choices:["Fruit", "Tofu","Vegetables", "Potatoes"],
      correctAnswer:"Fruit"
    },
    {
      question: "How many different flavors of jelly beans exist?",
      choices:["50", "190","100", "30"],
      correctAnswer:"50"
    },
    {
      question: "What was the original flavor of the filling in Twinkies?",
      choices:["Strawberry", "Banana Cream", "Cherry", "Lemon" ],
      correctAnswer:"Banana Cream"
    },
    {
      question: "What is the most popular spice in the world?",
      choices:["Pepper", "Cinnamon", "Cumin", "Coriander" ],
      correctAnswer:"Pepper"
    },
    {
      question: "What is bubble gum made of?",
      choices:["Gum", "Latex", "Chicle", "Dough"],
      correctAnswer:"Chicle"
    },
    {
      question: "What is eaten traditionally in the UK the day before Ash Wednesday?",
      choices: ["Fish","Wine","Lentils","Pancakes"],
      correctAnswer:"Pancakes"
    }
  ];
//function to play the game , setting counters and timer
var game ={
  correctAnswers: 0,
  incorrectAnswers: 0,
  counter: 120,
  countdown: function(){
    game.counter--;
    $("#counter").html(game.counter);
    if(game.counter<=0){
       game.done();
    }
  },
  //setting up timer and putting questions and radio buttons into html
  start: function(){
    timer = setInterval(game.countdown,1000);
    $("#game-action").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>' );
    $("#start-game").remove();
    for (var i = 0; i < questions.length; i++) {
      $("#game-action").append("<h2>" +questions[i].question+"</h2>");
      for (var m = 0; m < questions[i].choices.length; m++) {
        $("#game-action").append("<input type= 'radio' name= 'question-"+i+"'value='"+questions[i].choices[m]+"'>"+questions[i].choices[m]);
      }
    }
    $("#game-action").append('<br><button id="end">Done</button>');

  },
//checks answers increments counters  
  done: function(){
    $.each($("input[name='question-0']:checked"),function(){
        if ($(this).val()==questions[0].correctAnswer) {
          game.correctAnswers++;
      }else{
        game.incorrectAnswers++;
      }
    });

    $.each($("input[name='question-1']:checked"),function(){
      if ($(this).val()==questions[1].correctAnswer) {
        game.correctAnswers++;
    }else{
      game.incorrectAnswers++;
    }
  });
  $.each($("input[name='question-2']:checked"),function(){
    if ($(this).val()== questions[2].correctAnswer) {
      game.correctAnswers++;
  }else{
    game.incorrectAnswers++;
  }
});
  $.each($("input[name='question-3']:checked"),function(){
    if ($(this).val()== questions[3].correctAnswer) {
      game.correctAnswers++;
  }else{
    game.incorrectAnswers++;
  }
});
  $.each($("input[name='question-4']:checked"),function(){
    if ($(this).val()== questions[4].correctAnswer) {
      game.correctAnswers++;
  }else{
    game.incorrectAnswers++;
  }
});
  $.each($("input[name='question-5']:checked"),function(){
    if($(this).val()== questions[5].correctAnswer){
      game.correctAnswers++;
    }else{
      game.incorrectAnswers++;
    }
  });
//   $.each($("input[name='question-2']:checked"),function(){
//     if ($(this).val()== questions[2].correctAnswer) {
//       game.correctAnswers++;
//   }else{
//     game.incorrectAnswers++;
//   }
// });
console.log("Correct Answers: " +this.correctAnswers);
// writes results to HTML 
  this.result();  
  }, 
  
  result: function(){
    clearInterval(timer);
    $('#game-action  h2').remove();
    $('#game-action').html("<h2> You are done! </h2>");
    
    $('#game-action').append("<h3>Correct Answers: " +this.correctAnswers+ "</h3>");
    $('#game-action').append("<h3>Incorrect Answers: " +this.incorrectAnswers+ "</h3>");
    $('#game-action').append("<h3>Unanswered: " +(questions.length-(this.incorrectAnswers+this.correctAnswers))+"</h3>");
  }

}

// //variables 
// var correctAnswers = 0;
// var incorrectAnswers = 0;
// var unanswered =0;
// var timeRemaining =0;
// var clockRunning = false;
// // on start click event loop through questons and call show questions for each 

// function showQuestion(question, choices){
 
// // use jquery to add the queston and choices to the correct html element 
// // loop through choices with a "for each" loop and append the choice as a radio button 
// // note: all the radio butons for question one should have the same name attribute . name atribute = queston + i  
// }
//timer object use a JS timer function called time out and set  interval to 60,000 then tell it what do do when time runs out 

// NO CODE BELOW THIS LINE
});
