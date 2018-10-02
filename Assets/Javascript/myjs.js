//the underScores array holds the number of underscores


var      game = {

          possiblePhrases: ['croquet', 'hyphen', 'swivel', 'ostracize', 'yacht', 'squawk', 'rogue', 'quip', 'phlegm'],
		  gamePhrase: [],
		  userGuesses: [],
		  userInput: [],
		  underscores: '',
		  underScores: []
	};

	  // Data Reset
	  var wrongGuess = 0;
	  var correctGuess = 0;
	  var n = false;
	  var guessIndex = '';
	  var firedButton = "";
	  var phraseSelect ='';
		  
		  	phraseSelect = game.possiblePhrases[Math.floor(Math.random() * game.possiblePhrases.length)];
			game.gamePhrase.push(phraseSelect );
			
		  for(var i=0; i < phraseSelect.length; i++) {
			game.underscores = "_" + ' ' + game.underscores;
			game.underScores.push("_");
		  };
		  
		  $(".underscores").text(game.underScores.join(' '));
		  
		  	$("button").click(function() {
				firedButton = $(this).val();
				game.userInput.push(firedButton);
				$(".guessed").text(game.userInput);

				n = phraseSelect.toLowerCase().includes(firedButton);
				console.log(n);
				console.log(phraseSelect);
				console.log(firedButton);
				guessIndex = phraseSelect.toLowerCase().indexOf(firedButton);
			
				evaluateKey(n, firedButton, guessIndex);
			
				if(wrongGuess === 7) {
					alert("computer wins");
				} else if(correctGuess === phraseSelect.length) {
					alert("Player Wins");
				} else {
				};
});
		  
			function evaluateKey(n, firedButton, guessIndex) {
		 
			if(n) {
				correctGuess = correctGuess + 1;
				game.underScores.splice(guessIndex,1,firedButton);
				$(".underscores").text(game.underScores);
				return;
			
			} else {
		 
				wrongGuess = wrongGuess + 1;
				
				switch(wrongGuess) {
				
				case 1:
					$("#start").hide();
					$("#badguess1").show();
					return;
					
				default:
				
					$("#badguess" + (wrongGuess-1)).hide();
					$("#badguess" + wrongGuess).show();
					return;
				}
			};
		 };
		  
         
