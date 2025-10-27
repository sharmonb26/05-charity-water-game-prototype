const questionsByLevel = {
	easy: [
		{
			question: 'Why should you wash your hands before eating?',
			answer: 'A',
			options: {
				A: 'To remove germs',
				B: 'To make hands wet',
				C: 'To waste water',
				D: 'To cool down'
			}
		},
		{
			question: 'What is safe to drink?',
			answer: 'B',
			options: {
				A: 'River water',
				B: 'Clean tap water',
				C: 'Dirty puddle water',
				D: 'None of the above'
			}
		},
		{
			question: 'What can happen if you drink dirty water?',
			answer: 'C',
			options: {
				A: 'You get stronger',
				B: 'Nothing',
				C: 'You get sick',
				D: 'You get taller'
			}
		}
	],
	medium: [
		{
			question: 'Which disease is commonly spread by unsafe water?',
			answer: 'B',
			options: {
				A: 'Asthma',
				B: 'Cholera',
				C: 'Diabetes',
				D: 'Allergies'
			}
		},
		{
			question: 'How does clean water help children?',
			answer: 'A',
			options: {
				A: 'Lets them go to school',
				B: 'Makes them sleepy',
				C: 'Makes them rich',
				D: 'None of the above'
			}
		},
		{
			question: 'What is a good way to save water?',
			answer: 'D',
			options: {
				A: 'Leave the tap running',
				B: 'Take long showers',
				C: 'Use more water',
				D: 'Turn off the tap when not in use'
			}
		}
	],
	hard: [
		{
			question: 'Which of the following pathogens is most commonly associated with waterborne outbreaks in developing countries?',
			answer: 'A',
			options: {
				A: 'Vibrio cholerae',
				B: 'Staphylococcus aureus',
				C: 'Escherichia coli O157:H7',
				D: 'Mycobacterium tuberculosis'
			}
		},
		{
			question: 'What is the primary reason for promoting handwashing with soap in public health campaigns?',
			answer: 'B',
			options: {
				A: 'To reduce water consumption',
				B: 'To interrupt the transmission of infectious diseases',
				C: 'To improve skin appearance',
				D: 'To prevent dehydration'
			}
		},
		{
			question: 'Which disease is LEAST likely to be transmitted through contaminated water?',
			answer: 'D',
			options: {
				A: 'Giardiasis',
				B: 'Typhoid fever',
				C: 'Cryptosporidiosis',
				D: 'Influenza'
			}
		}
	]
};

let score = 0;
let currentQuestion = 0;
let shuffledQuestions = [];
let currentLevel = null;


function getWinCount() {
	return Number(localStorage.getItem('waterGameWins') || '0');
}
function setWinCount(count) {
	localStorage.setItem('waterGameWins', String(count));
}


function getMealPoints() {
	return Number(localStorage.getItem('waterGameMealPoints') || '0');
}
function addMealPoints(points) {
	const total = getMealPoints() + points;
	localStorage.setItem('waterGameMealPoints', String(total));
	return total;
}


const winCountContainer = document.createElement('div');
winCountContainer.style.textAlign = 'center';
winCountContainer.style.fontSize = '18px';
winCountContainer.style.margin = '10px';
winCountContainer.style.position = 'relative';


const canImgTop = document.createElement('img');
canImgTop.src = 'img/water-can-transparent.png';
canImgTop.alt = 'Water Can';
canImgTop.style.position = 'absolute';
canImgTop.style.top = '0';
canImgTop.style.left = '0';
canImgTop.style.width = '32px';
canImgTop.style.height = '32px';
canImgTop.style.zIndex = '1001';
winCountContainer.appendChild(canImgTop);

const winCountDisplay = document.createElement('span');
winCountDisplay.textContent = `Wins: ${getWinCount()}`;

const mealPointsDisplay = document.createElement('span');
mealPointsDisplay.textContent = ` | Meal Points: ${getMealPoints()}`;
mealPointsDisplay.style.marginLeft = '10px';

const resetWinsBtn = document.createElement('button');
resetWinsBtn.textContent = 'Reset Wins';
resetWinsBtn.style.marginLeft = '10px';
resetWinsBtn.style.fontSize = '1em';
resetWinsBtn.style.padding = '4px 12px';
resetWinsBtn.onclick = function() {
	setWinCount(0);
	winCountDisplay.textContent = `Wins: 0`;
};

const chooseLevelBtn = document.createElement('button');
chooseLevelBtn.textContent = 'Choose Level';
chooseLevelBtn.style.marginLeft = '10px';
chooseLevelBtn.style.fontSize = '1em';
chooseLevelBtn.style.padding = '4px 12px';
chooseLevelBtn.onclick = function() {
	// Remove overlays and reset game UI
	const overlays = document.querySelectorAll('.game-overlay');
	overlays.forEach(el => el.remove());
	box.style.display = 'none';
	scoreDisplay.style.display = 'none';
	questionDisplay.textContent = '';
	optionsDisplay.innerHTML = '';
	feedbackDisplay.textContent = '';
	showLevelSelect();
};

winCountContainer.appendChild(winCountDisplay);
winCountContainer.appendChild(mealPointsDisplay);
winCountContainer.appendChild(resetWinsBtn);
winCountContainer.appendChild(chooseLevelBtn);
document.body.appendChild(winCountContainer);


const box = document.createElement('div');
box.style.width = '200px';
box.style.height = '300px';
box.style.border = '2px solid #2E9DF7';
box.style.position = 'relative';
box.style.margin = '20px auto';
box.style.background = '#fff';
document.body.appendChild(box);

// Create the water fill
const water = document.createElement('div');
water.style.position = 'absolute';
water.style.left = '0';
water.style.bottom = '0';
water.style.width = '100%';
water.style.height = '0%'; // Start empty
water.style.background = '#2E9DF7';
box.appendChild(water);


const scoreDisplay = document.createElement('div');
scoreDisplay.style.textAlign = 'center';
scoreDisplay.style.fontSize = '20px';
scoreDisplay.style.margin = '10px';
scoreDisplay.textContent = `Score: ${score}`;
document.body.appendChild(scoreDisplay);

// Show question
const questionDisplay = document.createElement('div');
questionDisplay.style.textAlign = 'center';
questionDisplay.style.margin = '20px';
document.body.appendChild(questionDisplay);

// Show options
const optionsDisplay = document.createElement('div');
optionsDisplay.style.textAlign = 'center';
document.body.appendChild(optionsDisplay);

// Show feedback
const feedbackDisplay = document.createElement('div');
feedbackDisplay.style.textAlign = 'center';
feedbackDisplay.style.margin = '10px';
document.body.appendChild(feedbackDisplay);

// Function to update water fill based on score
function updateWater() {
    // Water fill is between 0% and 100%, max score is 5
    let percent = Math.max(0, Math.min(100, (score / 5) * 100));
    water.style.height = `${percent}%`;
}

// Shuffle array helper
// Shuffle array using forEach (beginner-friendly)
function shuffle(array) {
	const arr = array.slice();
	arr.forEach((item, i) => {
		const j = Math.floor(Math.random() * arr.length);
		// Swap arr[i] and arr[j]
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	});
	return arr;
}

// Reset game state and UI
function resetGame() {
	score = 0;
	currentQuestion = 0;
	shuffledQuestions = shuffle(questionsByLevel[currentLevel]);
	box.style.display = 'block';
	scoreDisplay.textContent = `Score: ${score}`;
	updateWater();
	questionDisplay.textContent = '';
	optionsDisplay.innerHTML = '';
	feedbackDisplay.textContent = '';
	winCountDisplay.textContent = `Wins: ${getWinCount()}`;
	// Remove winner/try again messages and buttons
	const overlays = document.querySelectorAll('.game-overlay');
	overlays.forEach(el => el.remove());
	showQuestion();
}

// Show winner message and confetti with Start Over button
function showWinner() {
	questionDisplay.textContent = '';
	optionsDisplay.innerHTML = '';
	feedbackDisplay.textContent = '';
	scoreDisplay.textContent = '';
	box.style.display = 'none';

	let wins = getWinCount() + 1;
	setWinCount(wins);
	winCountDisplay.textContent = `Wins: ${wins}`;

	// Water rainshower effect
	for (let i = 0; i < 80; i++) {
		const drop = document.createElement('div');
		drop.className = 'game-overlay';
		drop.style.position = 'fixed';
		drop.style.left = Math.random() * 100 + 'vw';
		drop.style.top = '-30px';
		drop.style.width = '8px';
		drop.style.height = '28px';
		drop.style.background = 'linear-gradient(to bottom, #2E9DF7 60%, #8BD1CB 100%)';
		drop.style.borderRadius = '50% 50% 60% 60%/60% 60% 100% 100%';
		drop.style.opacity = '0.7';
		drop.style.zIndex = '1001';
		drop.style.transition = 'top 1.7s linear';
		document.body.appendChild(drop);
		setTimeout(() => {
			drop.style.top = '100vh';
		}, 100);
		setTimeout(() => {
			drop.remove();
		}, 1900);
	}

	const winnerMsg = document.createElement('div');
	winnerMsg.className = 'game-overlay';
	winnerMsg.style.position = 'fixed';
	winnerMsg.style.top = '50%';
	winnerMsg.style.left = '50%';
	winnerMsg.style.transform = 'translate(-50%, -50%)';
	winnerMsg.style.background = '#ffffffff';
  winnerMsg.style.color = 'green';
	winnerMsg.style.color = 'green';
	winnerMsg.style.fontSize = '2em';
	winnerMsg.style.padding = '30px 40px';
	winnerMsg.style.borderRadius = '20px';
	winnerMsg.style.textAlign = 'center';
	winnerMsg.style.zIndex = '1000';




	const mainMsg = document.createElement('div');
	mainMsg.textContent = 'Congratulations! You filled the water box!';
	winnerMsg.appendChild(mainMsg);

	// Random educational message about $5 donation and water using forEach
	let eduMessages = [
		'Just $5 can help provide clean water for a child for an entire year. Clean water means better health and more time for school.',
		'A $5 donation can help build wells, giving communities safe water and hope for the future.',
		'With only $5, you can help prevent diseases caused by unclean water and save lives in remote villages.',
		'Your $5 can help children spend less time collecting water and more time learning and playing.',
		'Every $5 donated helps families grow food, stay healthy, and build a brighter future with clean water.'
	];
	
	eduMessages = shuffle(eduMessages);
	
	const eduMsg = document.createElement('div');
	eduMsg.textContent = eduMessages[0];
	eduMsg.style.fontSize = '1em';
	eduMsg.style.color = '#159A48';
	eduMsg.style.marginTop = '18px';
	eduMsg.style.marginBottom = '10px';
	winnerMsg.appendChild(eduMsg);

	
	const nextBtn = document.createElement('button');
	nextBtn.textContent = 'Next';
	nextBtn.style.display = 'block';
	nextBtn.style.margin = '20px auto 0 auto';
	nextBtn.style.fontSize = '1em';
	nextBtn.style.padding = '10px 20px';
	nextBtn.onclick = function() {
		winnerMsg.remove();
		showMealPointsAward();
	};
	winnerMsg.appendChild(nextBtn);


	const restartBtn = document.createElement('button');
	restartBtn.textContent = 'Start Over';
	restartBtn.style.display = 'block';
	restartBtn.style.margin = '20px auto 0 auto';
	restartBtn.style.fontSize = '1em';
	restartBtn.style.padding = '10px 20px';
	restartBtn.onclick = resetGame;
	winnerMsg.appendChild(restartBtn);

	document.body.appendChild(winnerMsg);
}

// Show meal points award message
function showMealPointsAward() {

	let points = 0;
	if (currentLevel === 'easy') points = 100;
	else if (currentLevel === 'medium') points = 200;
	else if (currentLevel === 'hard') points = 300;
	const totalPoints = addMealPoints(points);
	mealPointsDisplay.textContent = ` | Meal Points: ${totalPoints}`;

	
	const mealMsg = document.createElement('div');
	mealMsg.className = 'game-overlay';
	mealMsg.style.position = 'fixed';
	mealMsg.style.top = '50%';
	mealMsg.style.left = '50%';
	mealMsg.style.transform = 'translate(-50%, -50%)';
	mealMsg.style.background = '#ffffffff';
	mealMsg.style.color = '#fff';
  mealMsg.style.color = 'green';

	mealMsg.style.fontSize = '2em';
	mealMsg.style.padding = '30px 40px';
	mealMsg.style.borderRadius = '20px';
	mealMsg.style.textAlign = 'center';
	mealMsg.style.zIndex = '1000';
	mealMsg.innerHTML = `You earned <b>${points} meal points</b> from Charity Water to use at your university!<br><br>Total meal points: <b>${totalPoints}</b>`;

	
	const restartBtn = document.createElement('button');
	restartBtn.textContent = 'Start Over';
	restartBtn.style.display = 'block';
	restartBtn.style.margin = '20px auto 0 auto';
	restartBtn.style.fontSize = '1em';
	restartBtn.style.padding = '10px 20px';
	restartBtn.onclick = function() {
		mealMsg.remove();
		resetGame();
	};
	mealMsg.appendChild(restartBtn);

	document.body.appendChild(mealMsg);
}

function showTryAgain() {
	questionDisplay.textContent = '';
	optionsDisplay.innerHTML = '';
	feedbackDisplay.textContent = '';
	scoreDisplay.textContent = '';
	box.style.display = 'none';

	const tryAgainMsg = document.createElement('div');
	tryAgainMsg.textContent = 'You reached -3 points. Try again!';
	tryAgainMsg.className = 'game-overlay';
	tryAgainMsg.style.position = 'fixed';
	tryAgainMsg.style.top = '50%';
	tryAgainMsg.style.left = '50%';
	tryAgainMsg.style.transform = 'translate(-50%, -50%)';
	tryAgainMsg.style.background = '#F5402C';
	tryAgainMsg.style.color = '#fff';
	tryAgainMsg.style.fontSize = '2em';
	tryAgainMsg.style.padding = '30px 40px';
	tryAgainMsg.style.borderRadius = '20px';
	tryAgainMsg.style.textAlign = 'center';
	tryAgainMsg.style.zIndex = '1000';

	// Try Again button
	const tryBtn = document.createElement('button');
	tryBtn.textContent = 'Try Again';
	tryBtn.style.display = 'block';
	tryBtn.style.margin = '20px auto 0 auto';
	tryBtn.style.fontSize = '1em';
	tryBtn.style.padding = '10px 20px';
	tryBtn.onclick = resetGame;
	tryAgainMsg.appendChild(document.createElement('br'));
	tryAgainMsg.appendChild(tryBtn);
	document.body.appendChild(tryAgainMsg);
}

function showQuestion() {
	feedbackDisplay.textContent = '';
	if (score >= 5) {
		showWinner();
		return;
	}
	if (score <= -3) {
		showTryAgain();
		return;
	}
	// If all questions used, reshuffle
	if (currentQuestion >= shuffledQuestions.length) {
		shuffledQuestions = shuffle(questionsByLevel[currentLevel]);
		currentQuestion = 0;
	}
	const q = shuffledQuestions[currentQuestion];
	questionDisplay.textContent = q.question;
	optionsDisplay.innerHTML = '';

	// Render answers in the vertical list box
	const answersList = document.getElementById('answers-list');
	answersList.innerHTML = '';
	let selectedAnswer = null;
	for (const letter of ['A', 'B', 'C', 'D']) {
		const li = document.createElement('li');
		li.textContent = `${letter}: ${q.options[letter]}`;
		li.onclick = function() {
			selectedAnswer = letter;
			// Highlight selected
			Array.from(answersList.children).forEach(item => {
				item.style.background = '#e6f7ff';
			});
			li.style.background = '#FFC907';
		};
		answersList.appendChild(li);
	}

	// Create a container for the action buttons
	const actionBtnContainer = document.createElement('div');
	actionBtnContainer.style.textAlign = 'center';
	actionBtnContainer.style.marginTop = '20px';

	// Create submit button
	const submitBtn = document.createElement('button');
	submitBtn.textContent = 'Generate 1 virtual Dollar';
	submitBtn.style.display = 'inline-block';
	submitBtn.style.margin = '0 10px 0 0';
	submitBtn.style.fontSize = '1em';
	submitBtn.style.padding = '10px 20px';
	submitBtn.onclick = function() {
		if (!selectedAnswer) {
			feedbackDisplay.textContent = 'Please select an answer.';
			return;
		}
		if (selectedAnswer === q.answer) {
			score++;
			feedbackDisplay.textContent = 'Correct!';
		} else {
			score--;
			feedbackDisplay.textContent = 'Incorrect.';
		}
		scoreDisplay.textContent = `Score: ${score}`;
		updateWater();
		currentQuestion++;
		setTimeout(showQuestion, 1000);
	};
	actionBtnContainer.appendChild(submitBtn);


	const startOverBtn = document.createElement('button');
	startOverBtn.textContent = 'Start Over';
	startOverBtn.style.display = 'inline-block';
	startOverBtn.style.margin = '0 0 0 10px';
	startOverBtn.style.fontSize = '1em';
	startOverBtn.style.padding = '10px 20px';
	startOverBtn.onclick = resetGame;
	actionBtnContainer.appendChild(startOverBtn);

	optionsDisplay.appendChild(actionBtnContainer);
}

// Level selection UI
function showLevelSelect() {
	// Hide game elements
	box.style.display = 'none';
	scoreDisplay.style.display = 'none';
	questionDisplay.textContent = '';
	optionsDisplay.innerHTML = '';
	feedbackDisplay.textContent = '';

	// Add class to body to hide answers box and h3
	document.body.classList.add('level-select-active');

	const levelOverlay = document.createElement('div');
	levelOverlay.className = 'game-overlay';
	levelOverlay.setAttribute('level-select', '');
	levelOverlay.style.position = 'fixed';
	levelOverlay.style.top = '50%';
	levelOverlay.style.left = '50%';
	levelOverlay.style.transform = 'translate(-50%, -50%)';
	levelOverlay.style.background = '#2E9DF7';
	levelOverlay.style.color = '#fff';
	levelOverlay.style.fontSize = '2em';
	levelOverlay.style.padding = '30px 40px';
	levelOverlay.style.borderRadius = '20px';
	levelOverlay.style.textAlign = 'center';
	levelOverlay.style.zIndex = '1000';

	const canImg = document.createElement('img');
	canImg.src = 'img/water-can-transparent.png';
	canImg.alt = 'Water Can';
	canImg.style.position = 'absolute';
	canImg.style.top = '10px';
	canImg.style.left = '10px';
	canImg.style.width = '40px';
	canImg.style.height = '40px';
	canImg.style.zIndex = '1001';
	levelOverlay.appendChild(canImg);

	
	const levelTitle = document.createElement('div');
	levelTitle.textContent = 'Select Level';
	levelTitle.style.marginTop = '10px';
	levelOverlay.appendChild(levelTitle);

	['Easy', 'Medium', 'Hard'].forEach(level => {
		const btn = document.createElement('button');
		btn.textContent = level;
		btn.style.display = 'block';
		btn.style.margin = '20px auto';
		btn.style.fontSize = '1em';
		btn.style.padding = '10px 20px';
		btn.onclick = function() {
			currentLevel = level.toLowerCase();
			// Remove overlay
			levelOverlay.remove();
			// Remove class from body to show answers box and h3 again
			document.body.classList.remove('level-select-active');
			startGameWithLevel(currentLevel);
		};
		levelOverlay.appendChild(btn);
	});
	document.body.appendChild(levelOverlay);
}

function startGameWithLevel(level) {
	score = 0;
	currentQuestion = 0;
	shuffledQuestions = shuffle(questionsByLevel[level]);
	box.style.display = 'block';
	scoreDisplay.style.display = 'block';
	scoreDisplay.textContent = `Score: ${score}`;
	updateWater();
	questionDisplay.textContent = '';
	optionsDisplay.innerHTML = '';
	feedbackDisplay.textContent = '';
	showQuestion();



document.body.appendChild(gameTitle);

}

// Initial screen
showLevelSelect();
// Log a message to the console to ensure the script is linked correctly
console.log('JavaScript file is linked correctly.');
