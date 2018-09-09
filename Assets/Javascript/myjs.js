//the underScores array holds the number of underscores


var      game = {

          possiblePhrases: ['croquet', 'hyphen', 'swivel', 'ostracize', 'yacht', 'squawk', 'rogue', 'quip', 'phlegm'],
		  gamePhrase: [],
		  userGuesses: [],
		  underScores: [],
		  userInput: []
	};
	
		  // Data Reset
		  var wrongGuess = 0;
		  var correctGuess = 0;
		  var n = "";
		  var guessIndex = '';
		  var firedButton = "";
		  var phraseSelect ='';
		  
		  	phraseSelect = game.possiblePhrases[Math.floor(Math.random() * game.possiblePhrases.length)];
			game.gamePhrase.push(phraseSelect );
			
		  for(var i=0; i < phraseSelect.length; i++) {
			game.underScores.push("_ ");
		  };
		  
		  $(".underscores").text(game.underScores);
		  
		  	$("button").click(function() {
			firedButton = $(this).val();
			game.userInput.push(firedButton);
			$(".guessed").text(game.userInput);

			n = phraseSelect.includes(firedButton);
			guessIndex = phraseSelect.indexOf(firedButton);
			
			if(wrongGuess === 7) {
			
				alert("computer wins");
				
			} else if(correctGuess === phraseSelect.length) {
			
				alert("Player Wins");
			
			} else {
			
				evaluateKey(n, firedButton, guessIndex);
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
					
				case 2:
					$("#badguess1").hide();
					$("#badguess2").show();
					return;
				
				case 3:
					$("#badguess2").hide();
					$("#badguess3").show();
					return;
				
				case 4:
					$("#badguess3").hide();
					$("#badguess4").show();
					return;
				
				case 5:
					$("#badguess4").hide();
					$("#badguess5").show();
					return;
				
				case 6:
					$("#badguess5").hide();
					$("#badguess6").show();
					return;
				
				case 7:
					$("#badguess6").hide();
					$("#badguess7").show();
					return;
				}
			};
		 
		 };
		  
         
