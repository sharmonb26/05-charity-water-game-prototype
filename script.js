// Questions for each level (easy, medium, hard)
const questionsByLevel = {
	easy: [
		{
			question: 'Which term describes water that can be collected daily from a protected source without causing illness?',
			answer: 'B',
			options: {
				A: 'Surface runoff',
				B: 'Safe drinking water',
				C: 'Greywater',
				D: 'Saline water'
			}
		},
		{
			question: 'A major health benefit of access to safely managed drinking water is reduction of which disease?',
			answer: 'A',
			options: {
				A: 'Cholera',
				B: 'Seasonal allergies',
				C: 'Near-sightedness',
				D: 'Bone fractures'
			}
		},
		{
			question: 'Girls and women in some rural regions may spend up to how many hours per day collecting water?',
			answer: 'C',
			options: {
				A: '30 minutes',
				B: '1 hour',
				C: 'Several hours (often 3–6)',
				D: 'All daylight hours (12+)'
			}
		},
		{
			question: 'Which simple household practice reduces diarrhea risk when water quality is uncertain?',
			answer: 'D',
			options: {
				A: 'Adding table salt',
				B: 'Cooling in shade',
				C: 'Stirring vigorously',
				D: 'Boiling water'
			}
		},
		{
			question: 'Time spent collecting water often reduces which important activity for girls?',
			answer: 'B',
			options: {
				A: 'Sleep duration',
				B: 'School attendance',
				C: 'Vitamin absorption',
				D: 'Bone growth'
			}
		},
		{
			question: 'Which pathogen commonly spreads through contaminated drinking water and causes acute intestinal infection?',
			answer: 'C',
			options: {
				A: 'Influenza virus',
				B: 'Tetanus bacterium',
				C: 'Vibrio cholerae',
				D: 'Malaria parasite'
			}
		},
		{
			question: 'Lack of nearby clean water most directly increases risk of which physical burden?',
			answer: 'A',
			options: {
				A: 'Musculoskeletal strain from carrying heavy containers',
				B: 'Sunburn from reflection',
				C: 'High altitude sickness',
				D: 'Frostbite'
			}
		},
		{
			question: 'Handwashing with soap at critical times primarily prevents transmission of:',
			answer: 'D',
			options: {
				A: 'Lead poisoning',
				B: 'Arthritis',
				C: 'Skin tanning',
				D: 'Fecal–oral pathogens'
			}
		},
		{
			question: 'Which organization tracks global progress toward water and sanitation targets (SDG 6)?',
			answer: 'B',
			options: {
				A: 'World Wildlife Fund',
				B: 'WHO/UNICEF Joint Monitoring Programme',
				C: 'International Space Station',
				D: 'UNESCO World Heritage Centre'
			}
		},
		{
			question: 'Collecting water from distant unprotected sources increases risk of which outcome?',
			answer: 'C',
			options: {
				A: 'Improved school performance',
				B: 'Higher dissolved oxygen at source',
				C: 'Exposure to microbial contamination',
				D: 'Enhanced bone density'
			}
		},
	],
	medium: [
		{
			question: 'Which waterborne protozoan can cause prolonged diarrhea if drinking water is not adequately filtered?',
			answer: 'C',
			options: {
				A: 'Plasmodium falciparum',
				B: 'Clostridium botulinum',
				C: 'Giardia lamblia',
				D: 'Variola virus'
			}
		},
		{
			question: 'Household chlorination most effectively inactivates which category of pathogens?',
			answer: 'A',
			options: {
				A: 'Bacteria',
				B: 'Protozoan cysts (fully resistant)',
				C: 'Heavy metals',
				D: 'Silicate minerals'
			}
		},
		{
			question: 'Unsafe water and poor sanitation disproportionately affect which demographic due to caregiving and collection roles?',
			answer: 'D',
			options: {
				A: 'Urban adult men',
				B: 'Retired populations in high-income countries',
				C: 'Polar researchers',
				D: 'Women and girls in low-resource settings'
			}
		},
		{
			question: 'Which simple point-of-use method both clarifies and disinfects water using sunlight exposure?',
			answer: 'B',
			options: {
				A: 'Deep borehole pumping',
				B: 'SODIS (solar disinfection)',
				C: 'Ion exchange softening',
				D: 'Reverse osmosis'
			}
		},
		{
			question: 'Arsenic contamination of shallow tubewells is a major chronic toxicity concern in parts of which region?',
			answer: 'C',
			options: {
				A: 'Northern Scandinavia',
				B: 'Central Sahara',
				C: 'Bangladesh and West Bengal',
				D: 'Eastern Patagonia'
			}
		},
		{
			question: 'Latrine construction near a drinking water source can introduce which health risk if poorly sited?',
			answer: 'A',
			options: {
				A: 'Microbial fecal contamination of groundwater',
				B: 'Immediate eutrophication from nitrogen gas',
				C: 'Acute thermal pollution',
				D: 'Increased dissolved oxygen saturation'
			}
		},
		{
			question: 'Extended daily walking to fetch water most directly reduces time available for:',
			answer: 'B',
			options: {
				A: 'Digestive enzyme production',
				B: 'Formal education and study',
				C: 'Vitamin D synthesis',
				D: 'Cellular respiration'
			}
		},
		{
			question: 'Which intervention most directly interrupts fecal–oral transmission pathways?',
			answer: 'D',
			options: {
				A: 'Pumping more irrigation water',
				B: 'Adding food coloring to stored water',
				C: 'Leaving containers uncovered',
				D: 'Proper handwashing with soap'
			}
		},
		{
			question: 'Household water turbidity mainly increases the persistence of which organisms by shielding them from disinfection?',
			answer: 'A',
			options: {
				A: 'Microbial pathogens',
				B: 'Inert sand grains only',
				C: 'Dissolved salts exclusively',
				D: 'Pure oxygen molecules'
			}
		},
		{
			question: 'Which distinctive funding approach is Charity: Water widely known for?',
			answer: 'B',
			options: {
				A: 'Charging a platform fee on every donation',
				B: 'The 100% model (public donations go directly to field projects)',
				C: 'Owning bottled water brands for revenue',
				D: 'Investing only in large urban desalination plants'
			}
		},
	],
	hard: [
		{
			question: 'Which global cause of mortality is significantly reduced by improved drinking water, sanitation, and hygiene (WASH)?',
			answer: 'A',
			options: {
				A: 'Diarrheal diseases',
				B: 'Pancreatic cancer',
				C: 'Genetic disorders',
				D: 'Spinal injuries'
			}
		},
		{
			question: 'Which bacterial pathogen is a major contributor to severe dehydration and rapid fluid loss in outbreaks linked to unsafe water?',
			answer: 'C',
			options: {
				A: 'Helicobacter pylori',
				B: 'Mycobacterium tuberculosis',
				C: 'Vibrio cholerae',
				D: 'Streptococcus pyogenes'
			}
		},
		{
			question: 'Which UN Sustainable Development Goal specifically addresses clean water and sanitation?',
			answer: 'D',
			options: {
				A: 'SDG 2 (Zero Hunger)',
				B: 'SDG 3 (Good Health and Well-being)',
				C: 'SDG 11 (Sustainable Cities)',
				D: 'SDG 6 (Clean Water and Sanitation)'
			}
		},
		{
			question: 'Economic studies show that investing in safe water access yields returns through which primary mechanism?',
			answer: 'B',
			options: {
				A: 'Increased ocean salinity',
				B: 'Reduced disease burden and improved productivity',
				C: 'Instant desalination of all groundwater',
				D: 'Elimination of greenhouse gases'
			}
		},
		{
			question: 'Which measure best captures household time burden associated with distant water sources?',
			answer: 'A',
			options: {
				A: 'Total daily hours spent collecting water',
				B: 'Average indoor air temperature',
				C: 'Number of trees near the path',
				D: 'Cloud albedo index'
			}
		},
		{
			question: 'Which condition is exacerbated by chronic exposure to high fluoride levels in drinking water?',
			answer: 'C',
			options: {
				A: 'Acute malaria',
				B: 'Viral encephalitis',
				C: 'Skeletal fluorosis',
				D: 'Tubercular meningitis'
			}
		},
		{
			question: 'Integrated water safety plans for small community systems emphasize which proactive step?',
			answer: 'B',
			options: {
				A: 'Eliminating storage entirely',
				B: 'Systematic risk assessment and control measures',
				C: 'Random chlorination without monitoring',
				D: 'Assuming universal filtration at point of use'
			}
		},
		{
			question: 'Which demographic is most impacted by lost educational opportunities due to water collection duties?',
			answer: 'A',
			options: {
				A: 'School-age girls',
				B: 'Retired men',
				C: 'Infants under six months',
				D: 'Commercial airline pilots'
			}
		},
		{
			question: 'Which parasitic infection associated with contact with contaminated surface water can cause hematuria and anemia?',
			answer: 'D',
			options: {
				A: 'Onchocerciasis',
				B: 'Taenia saginata (beef tapeworm)',
				C: 'Giardiasis',
				D: 'Schistosomiasis'
			}
		},
		{
			question: 'Which indicator is used to monitor progress toward safely managed sanitation under SDG 6?',
			answer: 'C',
			options: {
				A: 'Global average wind speed',
				B: 'Average soil organic carbon',
				C: 'Use of improved sanitation facilities with safe excreta management',
				D: 'Average upper troposphere humidity'
			}
		},
	]
};

let celebrationPlayed = false; // repurposed: indicates celebration played for current time at score 3
let prevScore = 0; // track previous score to detect transitions
// Create one AudioContext we can reuse
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Sound preference (on/off) stored in localStorage so user choice persists.
function getSoundEnabled() {
	const v = localStorage.getItem('waterGameSound');
	if (v === null) return true; // default ON
	return v === 'true';
}
function setSoundEnabled(val) {
	localStorage.setItem('waterGameSound', val ? 'true' : 'false');
}
let soundEnabled = getSoundEnabled();

// ------------------------------------------------------------
// Helper functions (kept very simple for beginners)
// ------------------------------------------------------------
// makeEl(tag, text, styles): create an element, optionally set its text and apply inline styles.
function makeEl(tag, text, styles) {
	const el = document.createElement(tag);
	if (text) el.textContent = text;
	if (styles) {
		for (const key in styles) {
			el.style[key] = styles[key];
		}
	}
	return el;
}

// addButton(parent, label, onClick, styles): small helper to create a button and attach a click handler.
function addButton(parent, label, onClick, styles) {
	const btn = makeEl('button', label, styles);
	btn.onclick = onClick;
	parent.appendChild(btn);
	return btn;
}

// makeOverlay(extraStyles): builds a centered overlay div with base styles plus any extra styles passed in.
function makeOverlay(extraStyles) {
	const base = {
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: '20px',
		textAlign: 'center',
		zIndex: '1000',
		padding: '30px 40px'
	};
	const overlay = makeEl('div', '', Object.assign(base, extraStyles || {}));
	overlay.className = 'game-overlay';
	return overlay;
}

// createRainDrops(count): simple abstraction for winner rain effect.
function createRainDrops(count) {
	for (let i = 0; i < count; i++) {
		const drop = makeEl('div', '', {
			position: 'fixed',
			left: Math.random() * 100 + 'vw',
			top: '-30px',
			width: '8px',
			height: '28px',
			background: 'linear-gradient(to bottom, #2E9DF7 60%, #8BD1CB 100%)',
			borderRadius: '50% 50% 60% 60%/60% 60% 100% 100%',
			opacity: '0.7',
			zIndex: '1001',
			transition: 'top 1.7s linear'
		});
		document.body.appendChild(drop);
		setTimeout(() => { drop.style.top = '100vh'; }, 100);
		setTimeout(() => { drop.remove(); }, 1900);
	}
}

// Play a short celebration: a soft noise burst + two quick chime notes.
function playCelebration() {
	if (!soundEnabled) return; // do nothing if sound muted
	if (celebrationPlayed) return; // only play once per run
	celebrationPlayed = true;
	try { audioCtx.resume(); } catch(e) { /* ignore autoplay errors */ }

	// 1. Create a very short "confetti" noise burst using white noise.
	const noiseDuration = 0.3; // seconds
	const noiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate * noiseDuration, audioCtx.sampleRate);
	const data = noiseBuffer.getChannelData(0);
	for (let i = 0; i < data.length; i++) {
		// Random sample scaled by a fade-out so it ends smoothly.
		const fade = Math.pow(1 - i / data.length, 2); // quadratic fade out
		data[i] = (Math.random() * 2 - 1) * fade;
	}
	const noiseSource = audioCtx.createBufferSource();
	noiseSource.buffer = noiseBuffer;
	const noiseGain = audioCtx.createGain();
	// Fade in super fast, then down to zero by end.
	noiseGain.gain.setValueAtTime(0, audioCtx.currentTime);
	noiseGain.gain.linearRampToValueAtTime(0.6, audioCtx.currentTime + 0.02);
	noiseGain.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + noiseDuration);
	noiseSource.connect(noiseGain);
	noiseGain.connect(audioCtx.destination);
	noiseSource.start();

	// 2. Two chime notes (simple sine waves) for a happy tone.
	const notes = [880, 1320]; // Frequencies in Hz (A5 and E6 make a bright interval)
	notes.forEach((freq, idx) => {
		const osc = audioCtx.createOscillator();
		osc.type = 'sine'; // smooth musical tone
		osc.frequency.value = freq;
		const gain = audioCtx.createGain();
		// Stagger the start times slightly for a rising feel.
		const startT = audioCtx.currentTime + idx * 0.05;
		gain.gain.setValueAtTime(0, startT);
		gain.gain.linearRampToValueAtTime(0.5, startT + 0.05); // quick swell
		gain.gain.linearRampToValueAtTime(0.0, startT + 0.35); // fade out
		osc.connect(gain);
		gain.connect(audioCtx.destination);
		osc.start(startT);
		osc.stop(startT + 0.36); // stop after fade
	});
}

// Simple "ding" sound each time a correct answer is given.
// We reuse the same audioCtx so browsers allow playback after user interaction.
function playDing() {
	if (!soundEnabled) return; // skip if muted
	// Create oscillator (sound source) and gain node (volume envelope)
	const osc = audioCtx.createOscillator();
	const gain = audioCtx.createGain();

	// Bright sine tone for a "ding" (A5 = 880 Hz)
	osc.type = 'sine';
	osc.frequency.setValueAtTime(880, audioCtx.currentTime);

	// Envelope: quick fade in then gentle fade out over ~1 second
	gain.gain.setValueAtTime(0, audioCtx.currentTime);
	gain.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.02); // fast attack
	gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.0); // fade out

	osc.connect(gain);
	gain.connect(audioCtx.destination);

	osc.start();
	// Stop oscillator after 1 second to free resources
	osc.stop(audioCtx.currentTime + 1.0);
}

let score = 0;
let currentQuestion = 0;
let shuffledQuestions = [];
let currentLevel = null;
let trackerContainer;
let trackerBars = [];
// Milestone messages for halfway progress (score 3)
const halfwayMilestoneMessages = [
	"You've filled up the well more than half way! 💧",
	"Great job — the well is past the halfway mark! 💧",
	"Halfway and beyond! Clean water is closer thanks to you! 💧"
];
let halfwayMilestoneShown = false;
let milestoneElRef = null; // will hold the DOM node for the halfway milestone


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
// Sound toggle button lets player mute/unmute all synthesized sounds.
const soundToggleBtn = document.createElement('button');
soundToggleBtn.textContent = soundEnabled ? 'Sound: On' : 'Sound: Off';
soundToggleBtn.style.marginLeft = '10px';
soundToggleBtn.style.fontSize = '1em';
soundToggleBtn.style.padding = '4px 12px';
soundToggleBtn.onclick = function() {
	soundEnabled = !soundEnabled;
	setSoundEnabled(soundEnabled);
	soundToggleBtn.textContent = soundEnabled ? 'Sound: On' : 'Sound: Off';
	// If turning sound off, suspend the audio context to save CPU.
	if (!soundEnabled) {
		try { audioCtx.suspend(); } catch(e) {}
	} else {
		// Resume so future sounds can play.
		try { audioCtx.resume(); } catch(e) {}
	}
};
winCountContainer.appendChild(soundToggleBtn);
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
	// Reset tracker visuals
	lastAnswerWrong = false;
	// Reset celebration and previous score
	celebrationPlayed = false;
	prevScore = 0;
	// Reset milestone state
	halfwayMilestoneShown = false;
	if (milestoneElRef) {
		milestoneElRef.remove();
		milestoneElRef = null;
	}
	createTracker();
	updateTracker();
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

	// Water rainshower effect (unchanged behavior, now using helper)
	createRainDrops(80);

	// Build winner overlay using helper (visual + text same as before)
	const winnerMsg = makeOverlay({ background: '#ffffffff', color: 'green', fontSize: '2em' });
	const mainMsg = makeEl('div', 'Congratulations! You filled the water box!');
	winnerMsg.appendChild(mainMsg);

	// Random educational message about $5 donation and water (still shuffled)
	let eduMessages = [
		'Just $5 can help provide clean water for a child for an entire year. Clean water means better health and more time for school.',
		'A $5 donation can help build wells, giving communities safe water and hope for the future.',
		'With only $5, you can help prevent diseases caused by unclean water and save lives in remote villages.',
		'Your $5 can help children spend less time collecting water and more time learning and playing.',
		'Every $5 donated helps families grow food, stay healthy, and build a brighter future with clean water.'
	];
	eduMessages = shuffle(eduMessages);
	const eduMsg = makeEl('div', eduMessages[0], { fontSize: '1em', color: '#159A48', marginTop: '18px', marginBottom: '10px' });
	winnerMsg.appendChild(eduMsg);

	// Next button (same label and behavior)
	addButton(winnerMsg, 'Next', function() {
		winnerMsg.remove();
		showMealPointsAward();
	}, { display: 'block', margin: '20px auto 0 auto', fontSize: '1em', padding: '10px 20px' });

	// Restart button (same behavior)
	addButton(winnerMsg, 'Start Over', resetGame, { display: 'block', margin: '20px auto 0 auto', fontSize: '1em', padding: '10px 20px' });

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

	// Meal points overlay (same visuals/content)
	const mealMsg = makeOverlay({ background: '#ffffffff', color: 'green', fontSize: '2em' });
	mealMsg.innerHTML = `You earned <b>${points} meal points</b> from Charity Water to use at your university!<br><br>Total meal points: <b>${totalPoints}</b>`;

	addButton(mealMsg, 'Start Over', function() {
		mealMsg.remove();
		resetGame();
	}, { display: 'block', margin: '20px auto 0 auto', fontSize: '1em', padding: '10px 20px' });

	document.body.appendChild(mealMsg);
}

function showTryAgain() {
	questionDisplay.textContent = '';
	optionsDisplay.innerHTML = '';
	feedbackDisplay.textContent = '';
	scoreDisplay.textContent = '';
	box.style.display = 'none';

	const tryAgainMsg = document.createElement('div');
	// Refactored with helper (same text & colors)
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

	// Try Again button (still separate for clarity for students)
	const tryBtn = addButton(tryAgainMsg, 'Try Again', resetGame, { display: 'block', margin: '20px auto 0 auto', fontSize: '1em', padding: '10px 20px' });
	tryAgainMsg.appendChild(document.createElement('br'));
	document.body.appendChild(tryAgainMsg);
}

function createTracker() {
    // Remove old tracker if exists
    if (trackerContainer) trackerContainer.remove();
    trackerContainer = document.createElement('div');
    trackerContainer.style.display = 'flex';
    trackerContainer.style.justifyContent = 'center';
    trackerContainer.style.margin = '10px auto 18px auto';
    trackerContainer.style.maxWidth = '220px';
    trackerContainer.style.gap = '6px';
    trackerBars = [];
    for (let i = 0; i < 5; i++) {
        const bar = document.createElement('div');
		bar.className = 'tracker-bar'; // add class for hover animation
        bar.style.width = '32px';
        bar.style.height = '18px';
        bar.style.borderRadius = '6px';
        bar.style.border = '1px solid #ccc';
        bar.style.background = '#e6f7ff';
        bar.style.transition = 'background 0.2s';
		// Hover logic: show emoji only if this bar index is < current score threshold.
		bar.addEventListener('mouseenter', () => {
			// Only show emoji up to player's current score (progress bars filled)
			if (i < score) {
				let emoji = '';
				// Choose emoji based on score level reached.
				// 1/5 crying, 2/5 sad, 3/5 neutral, 4/5 happy, 5/5 confetti.
				if (score >= 5) emoji = '🎉';
				else if (score === 4) emoji = '😊';
				else if (score === 3) emoji = '💪';
				else if (score === 2) emoji = '😢';
				else if (score === 1) emoji = '🪫';
				// Store original background to restore later if needed (optional)
				bar.setAttribute('data-orig-text', bar.textContent);
				bar.textContent = emoji; // show emoji
				bar.style.display = 'flex';
				bar.style.alignItems = 'center';
				bar.style.justifyContent = 'center';
			} else {
				// If not yet reached, do nothing (keeps box empty)
			}
		});
		bar.addEventListener('mouseleave', () => {
			// Clear emoji when leaving hover
			bar.textContent = '';
		});
        trackerContainer.appendChild(bar);
        trackerBars.push(bar);
    }
    // Place tracker below scoreDisplay
    scoreDisplay.insertAdjacentElement('afterend', trackerContainer);
}

let lastAnswerWrong = false;

function updateTracker() {
    for (let i = 0; i < trackerBars.length; i++) {
		const bar = trackerBars[i];
		// First remove filled class so we can re-add conditionally
		bar.classList.remove('tracker-bar-filled');
		if (i < score) {
			bar.style.background = '#4FCB53'; // green for correct
			bar.classList.add('tracker-bar-filled'); // allow hover animation
		} else if (i === score && lastAnswerWrong) {
			bar.style.background = '#F5402C'; // red for wrong
		} else {
			bar.style.background = '#e6f7ff'; // default
		}
    }
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
			// Play a ding sound for a correct answer
			playDing();
			feedbackDisplay.textContent = 'Correct!';
			lastAnswerWrong = false;
		} else {
			score--;
			feedbackDisplay.textContent = 'Incorrect.';
			lastAnswerWrong = true;
		}
		scoreDisplay.textContent = `Score: ${score}`;
		updateWater();
		updateTracker();
		// Start rain ambience at exactly 3 points (only once)
		// Trigger celebration sound exactly once when player reaches 3 points.
		// Celebration: trigger whenever we ENTER score 3 from a different score.
		if (score === 3 && prevScore !== 3) {
			playCelebration();
			celebrationPlayed = true; // mark played for this entry
		}
		// If we leave score 3 (score not 3 anymore) clear flag so it can play again on return.
		if (prevScore === 3 && score !== 3) {
			celebrationPlayed = false;
		}
		// Show halfway milestone message once when reaching score 3
		if (score === 3 && !halfwayMilestoneShown) {
			// Pick a random message from the array using simple Math.random
			const msg = halfwayMilestoneMessages[Math.floor(Math.random() * halfwayMilestoneMessages.length)];
			const milestoneEl = document.createElement('div');
			milestoneEl.textContent = msg;
			milestoneEl.style.textAlign = 'center';
			milestoneEl.style.margin = '14px auto';
			milestoneEl.style.fontSize = '16px';
			// Use class for green color so other text stays black
			milestoneEl.className = 'milestone-message';
			// Insert just below the score display (before tracker bars for visibility)
			scoreDisplay.insertAdjacentElement('afterend', milestoneEl);
			halfwayMilestoneShown = true;
			milestoneElRef = milestoneEl; // keep for later removal
		}
		currentQuestion++;
		// Remove milestone when score leaves 3 (either up to 4 or down to 2 or less)
		if (milestoneElRef && score !== 3) {
			milestoneElRef.remove();
			milestoneElRef = null;
		}
		// Update prevScore after handling transitions
		prevScore = score;
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

	// Level select overlay (refactored using helper, same styles)
	const levelOverlay = makeOverlay({ background: '#2E9DF7', color: '#fff', fontSize: '2em' });
	levelOverlay.setAttribute('level-select', '');

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
		addButton(levelOverlay, level, function() {
			currentLevel = level.toLowerCase();
			levelOverlay.remove();
			document.body.classList.remove('level-select-active');
			startGameWithLevel(currentLevel);
		}, { display: 'block', margin: '20px auto', fontSize: '1em', padding: '10px 20px' });
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
	createTracker();
	updateTracker();
	showQuestion();



document.body.appendChild(gameTitle);

// When showing the level select overlay:
document.body.classList.add('level-select-active');

// When starting the game (after level is chosen):
document.body.classList.remove('level-select-active');
}

// Initial screen
showLevelSelect();

window.addEventListener('DOMContentLoaded', function() {
    // Make the main game container smaller and centered
    var gameContainer = document.getElementById('game-container');
    if (gameContainer) {
        gameContainer.style.maxWidth = '340px';
        gameContainer.style.margin = '24px auto 100px auto';
        gameContainer.style.padding = '0 8px';
        gameContainer.style.boxSizing = 'border-box';
    }
    // Make the answers box smaller
    var answersBox = document.getElementById('answers-box');
    if (answersBox) {
        answersBox.style.maxWidth = '300px';
        answersBox.style.marginBottom = '48px';
        answersBox.style.boxSizing = 'border-box';
    }
    // Make sure the body allows scrolling and fits the viewport
    document.body.style.minHeight = '100vh';
    document.body.style.overflowY = 'auto';
    document.body.style.boxSizing = 'border-box';
});

		

