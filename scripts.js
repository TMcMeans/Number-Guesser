// Store input element 
var userInput = document.querySelector('input');

// Store button elements
var guessBtn = document.querySelector('.guess-btn');
var clearBtn = document.querySelector('.clear-btn');
var resetBtn = document.querySelector('.reset-btn');

// Store text elements 
var userGuessNumber = document.querySelector('.user-guess-number');
var userFeedback = document.querySelector('.user-feedback');

// Store minimum and maximum number value inputs
var minInput = document.querySelector('.min');
var maxInput = document.querySelector('.max');

// Store minimum and maximum numbers
var minNum = minInput.value; 
var maxNum = maxInput.value;

// Generate a random num between 1-100
var randomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum);;

// Use keyup event listener to enable buttons when user starts typing
userInput.addEventListener('keyup', function() {
	if (userInput.value.length === 0) {
		guessBtn.disabled = true; 
		clearBtn.disabled = true; 
		resetBtn.disabled = true; 
	} else {
		guessBtn.disabled = false; 
		clearBtn.disabled = false; 
		resetBtn.disabled = false; 
	}
});

// Listen for user input and call setMaxMin function to create number range 
maxInput.addEventListener('input', function() {
	setMaxMin();
	console.log("The user's min range: " + minInput.value);
	console.log("The user's max range: " + maxInput.value);
	console.log("A NEW random number: " + randomNum);
});

// Set max and min range and generate random number 
var setMaxMin = function() {
	minNum = parseInt(minInput.value);
	maxNum = parseInt(maxInput.value); 
    randomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

// Clear input field on button click
clearBtn.addEventListener('click', function() {
	userInput.value = ''; 
	minInput.value = '';
	maxInput.value = '';
});

// Reset game to original state- if player wins a round set game to reflect new state
resetBtn.addEventListener('click', function() {
	if (userFeedback.innerText == "BOOM!!! 💣 💣 💣") {
		maxNum += 10;
		minNum -= 10;
		minInput.value = minNum;
		maxInput.value = maxNum;
	    randomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum);
	    userGuessNumber.innerText = "...";
	    userFeedback.innerText = "You min range has decreased and your max range has increased. Guess again.";
	} else {
		userInput.value = '';
		minInput.value = '';
		maxInput.value = '';
		userGuessNumber.innerText = "...";
		userFeedback.innerText = "";
	}
});

// Compare the userInput number to the randomNum
guessBtn.addEventListener("click", function() {
	// prevent page refreshing 
	event.preventDefault();
	// display userInput number 
	userGuessNumber.innerText = userInput.value;
	invalidAnswer();
	// change text to say if userInput number is too high or too low 
	if (parseInt(userInput.value) === randomNum) {
		console.log("The random number: " + randomNum);
		console.log("The user's number: " + userInput.value);
		userFeedback.innerText = "BOOM!!! 💣 💣 💣";
	} else if (userInput.value > randomNum && userInput.value <= maxNum) {
		console.log("The random number: "  + randomNum);
		console.log("The user's number: " + userInput.value);
		userFeedback.innerText = "That is too high";
	} else if (userInput.value < randomNum && userInput.value >= minNum) {
		console.log("The random number: "  + randomNum);
		console.log("The user's number: " + userInput.value);
		userFeedback.innerText = "That is too low";
	}
});

// Display message if userInput is out of range 
var invalidAnswer = function() {
	if (parseInt(userInput.value) > maxNum) {
		alert('Your guess is outside of the range of possible answers. Please select a number between you minimum and your maximum.');
		userInput.value = '';
		minInput.value = '';
		maxInput.value = '';
		userGuessNumber.innerText = "🤷🏾‍♀️";
		userFeedback.innerText = "...";
	} else if (parseInt(userInput.value) < minNum) {
		alert('Your guess is outside of the range of possible answers. Please select a number between your minimum and your maximum numbers.');
		userInput.value = '';
		minInput.value = '';
		maxInput.value = '';
		userGuessNumber.innerText = "🤷🏾‍♀️";
		userFeedback.innerText = "...";
	}
};









