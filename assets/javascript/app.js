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
// object array of questions with choices array 
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
//function to play the game , setting second  counters and timer
var game ={
  correctAnswers: 0,
  incorrectAnswers: 0,
  counter: 120,
  //Jquery countdown plug in setting up game done 
  countdown: function(){
    game.counter--;
    $("#counter").html(game.counter);
    if(game.counter<=0){
       game.done();
    }
  },
  //setting up timer counter to = a second and putting questions and radio buttons into html sets interval clock updates to 1 sec
  start: function(){
    timer = setInterval(game.countdown,1000);
    //puts timer int html and sets the clock at the number of seconds in the counter 
    $("#game-action").prepend('<h2>Time Remaining: <span id="counter"></span> Seconds</h2>' );
    //switch from start game to the list of questions and answers with radio buttons 
    $("#start-game").remove();
    for (var i = 0; i < questions.length; i++) {
      //grabs the list of questons and answers from the array
      $("#game-action").append("<h2>" +questions[i].question+"</h2>");
      for (var m = 0; m < questions[i].choices.length; m++) {
        $("#game-action").append("<input id='choices' type= 'radio' name= 'question-"+i+"'value='"+questions[i].choices[m]+"'>"+questions[i].choices[m]);
      }
    }
    //adds the done button 
    $("#game-action").append('<br><button id="end">Done</button>');

  },
//checks answers increments score counters  
//question one
  done: function(){
    $.each($("input[name='question-0']:checked"),function(){
        if ($(this).val()==questions[0].correctAnswer) {
          game.correctAnswers++;
      }else{
        game.incorrectAnswers++;
      }
    });
//question two
    $.each($("input[name='question-1']:checked"),function(){
      if ($(this).val()==questions[1].correctAnswer) {
        game.correctAnswers++;
    }else{
      game.incorrectAnswers++;
    }
  });
  //question three 
  $.each($("input[name='question-2']:checked"),function(){
    if ($(this).val()== questions[2].correctAnswer) {
      game.correctAnswers++;
  }else{
    game.incorrectAnswers++;
  }
});
//question four
  $.each($("input[name='question-3']:checked"),function(){
    if ($(this).val()== questions[3].correctAnswer) {
      game.correctAnswers++;
  }else{
    game.incorrectAnswers++;
  }
});
//question five 
  $.each($("input[name='question-4']:checked"),function(){
    if ($(this).val()== questions[4].correctAnswer) {
      game.correctAnswers++;
  }else{
    game.incorrectAnswers++;
  }
});
//question six 
  $.each($("input[name='question-5']:checked"),function(){
    if($(this).val()== questions[5].correctAnswer){
      game.correctAnswers++;
    }else{
      game.incorrectAnswers++;
    }
  });
  // code to add a future 7th question if needed 
//   $.each($("input[name='question-6']:checked"),function(){
//     if ($(this).val()== questions[6].correctAnswer) {
//       game.correctAnswers++;
//   }else{
//     game.incorrectAnswers++;
//   }
// });

// writes results to HTML  
  this.result();  
  }, 
  
  result: function(){
    //clears the timer 
    clearInterval(timer);
    //removes game screen and shows you are done 
    $('#game-action  h2').remove();
    $('#game-action').html("<h2> You are done! </h2>");
   //shows the count of answers 
    $('#game-action').append("<h3>Correct Answers: " +this.correctAnswers+ "</h3>");
    $('#game-action').append("<h3>Incorrect Answers: " +this.incorrectAnswers+ "</h3>");
    $('#game-action').append("<h3>Unanswered: " +(questions.length-(this.incorrectAnswers+this.correctAnswers))+"</h3>");
  }

}



// NO CODE BELOW THIS LINE THIS IS END OF DOCUMENT READY 
});
