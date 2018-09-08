//the underScores array holds the number of underscores


var      game = {

	//                           possiblePhrases: ['croquet', 'hyphen', 'swivel', 'ostracize', 'yacht', 'squawk', 'rogue', 'quip', 'phlegm'],
		  possiblePhrases: ['CROQUET'],
		  gamePhrase: [],
		  userGuesses: [],
		  underScores: [],
		  userInput: []
	};
	
		  // Data Reset
		  game.userInput = [];
		  game.underScores = [];
		  var wrongGuess = 0;
		  var correctGuess = 0;
		  var n = "";
		  var guessIndex = '';
		  var firedButton = "";
		  var isGuessRight = false;

		  //logic to randomly select a phrase for the game
		  var phraseSelect = game.possiblePhrases[Math.floor(Math.random() * game.possiblePhrases.length)];
		  game.gamePhrase.push(phraseSelect );

		  for(var i=0; i < phraseSelect.length; i++) {
			game.underScores.push("_ ");
		  };

		  $(".underscores").text(game.underScores);

		  $("button").click(function() {
			 firedButton = $(this).val();
			 game.userInput.push(firedButton);

		  });

			 $(".guessed").text(game.userInput);

		  var n = phraseSelect.includes(firedButton);
		  var guessIndex = phraseSelect.indexOf(firedButton);
		  
		  if(n === true) {
			correctGuess = correctGuess + 1;
			game.underScores.splice(guessIndex,1,firedButton);
			
			$(".underscores").text(game.underScores);
			console.log("The value of correctGuess is : " + correctGuess);
			console.log("The value of guessIndex is : " + guessIndex);
			console.log("The value of game.underScores is : " + game.underScores);
		  } else {
		  	wrongGuess = wrongGuess + 1;
			console.log("The value of wrongGuess is : " + wrongGuess);
			$(".start").hide();
            $(".badguess1").show();
		  };
		  

/*                         
                              if(game.gamePhrase.includes(guess)) {

                              correctGuess = correctGuess + 1;

                              } else {

                              wrongGuess = wrongGuess + 1; */

//                           document.getElementById("start").src = '../Images/hangman/badGuess1.jpg';

//            };
         
