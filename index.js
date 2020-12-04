var readlineSync = require('readline-sync');
var color = require('chalk');
const CFonts = require('cfonts');



/**************************************** ALL VARIABLES ***********************************/

var score = 0


var questionList = [
	{
  que:"Suits is set in a fictional law firm in ________?\na.Atlanta\nb.New York City\nc.Austin\nd.Chicago",
  ans:"b",
	fact:'There are more lawyers than there are jobs for lawyers in NYC and beyond.'
},
{
  que:"What network airs 'Suits'?\na.USA\nb.NBC\nc.CBS\nd.TNT",
  ans:'a',
	fact: 'The USA Network was originally launched as UA-Columbia/MSG in 1977. It relaunched as USA Network on April 9, 1980.'
},
{
  que:"Who is the female shark in charge of the 'Suits' law firm?\na.Rachel Zane\nb.Donna Paulsen\nc.Donna Paulsen\nd.Jessica Pearson",
  ans:"d",
	fact:'Before she became named partner at Pearson Hardman, she was an associate at Gordon Schmidt Van Dyke.'
},
{
  que:"Who lands an interview with Harvey Specter after he runs from a drug deal gone bad?\na.Jack Soloff\nb.Sean Cahill\nc.Mike Ross\nd.Jeff Malone",
  ans:"c",
	fact:'Mike is a brilliant college drop-out who growing up, lived with his grandmother after his parents died in a car crash.'
},
{
  que:"The firm hires law graduates from ________?\na.Yale\nb.Columbia\nc.Harvard\nd.Stanford",
  ans:"c",
	fact:'Founded in 1817, Harvard Law School is one of the preeminent centers of legal education in the world.'
},
{
  que:"_____ is the firm's expert on all financial matters?\na.Charles Forstman\nb.Robert Zane\nc.Jeff Malone\nd.Louis Litt",
  ans:"d",
	fact:'Louis is overly pedantic, jealous to the point of paranoia, highly suspicious, snobbish, and cruel. However, he is very loyal to those he loves.'
},
{
  que:"Louis has a rivalry with _______?\na.Harvey\nb.Jack\nc.Jenny\nd.Charles",
  ans:"a",
	fact:"Louis is particularly jealous of Harvey's success and feels that his own contributions to the firm have been overlooked as a result."
},
{
  que:"Mike Ross is not an actual ________?\na.Lawyer\nb.Detective\nc.Financial consultant\nd.Doctor",
  ans:"a",
	fact:"Mike dropped out of college and never passed the bar in his own name."
},
{
  que:"Harvey Specter is a brilliant __________ lawyer?\na.Corporate litigation\nb.Trial\nc.Consumer\nd.Criminal",
  ans:"a",
	fact:"A lawyer starting out in corporate litigation can make an average of $160,000/year."
},
{
  que:"'Suits' first aired in _____?\na.2011\nb.2012\nc.2013\nd.2014",
  ans:"a",
	fact:"'Suits' premiered on June 23, 2011."
}
]

var leaderBoard = [
	{name:"Player-1",score: 3},
	{name:"Player-2",score: 6},
	{name: "Player-3",score: 7.5},
	{name:"Player-4",score: 4.5}
];




/**************************************** ALL Functions ***********************************/

function ruleBook(){
	console.log(color.hex('#5B84B1FF')('Rule 1️⃣ : For every ' + color.green('RIGHT') + (' answer you will be awarded with ')+  color.green('1') + (' Point.\n')));

	console.log(color.hex('#5B84B1FF')('Rule 2️⃣ : For every ' + color.red('WRONG') + (' answer') +  color.red(' 0.25 ') + ('points will be deducted from your score.\n')));
	
	console.log(color.hex('#5B84B1FF')('Rule 3️⃣ : After the game Score Board will be display, if you cross the threshold (score > 7.5) score please send me screenshot i will update the leaderboard.\n\n'));
}


function game(question, answer, fact){
	// console.log(color.hex('#FFD700')('**********************************************************************************'));
  var userAnswer = readlineSync.question(color.hex('#FC766AFF')(question) + '\n');

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    
		score = score + 1;
		console.log(color.green.underline("Hurrey, that's a right answer!👍"));
		console.log(color.cyan(fact));
    
  } else {
		score = score - 0.25;
    console.log(color.red.underline("Sorry,that's a wrong answer.👎"));
		console.log(color.cyan('The ans is '+ answer +' : '+ fact));
   
  }
	
	console.log("\ncurrent score: ", score, '\n');

	console.log(color.hex('#FFD700')('**********************************************************************************'));
	
}


function welcomeUser(name){
	CFonts.say('Welcome '+name + '!', {
			font: 'chrome',              // define the font face
			align: 'center',              // define text alignment
			colors: ['#fff56f'],         // define all colors
			background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
			letterSpacing: 1,           // define letter spacing
			lineHeight: 1,              // define the line height
			space: true,                // define if the output text should have empty lines on top and on the bottom
			maxLength: '0',             // define how many character can be on one line
			gradient: ["red","green"],            // define your two gradient colors
			independentGradient: false, // define if you want to recalculate the gradient for each new line
			transitionGradient: false,  // define if this is a transition between colors directly
			env: 'node'                 // define the environment CFonts is being executed in
	});
}


function showLeaderBoard(lb){
	for(player of lb){
		console.log(color.yellow(player.name + ' : ' + color.red(player.score)));
	}
}






/**************************************** THE GAME ***********************************/

console.log(color.green.bold.underline("WELCOME TO THE QUIZ !🔥🔥🔥\n\n"));

var userName = readlineSync.question(color.hex('#FC766AFF')("Hey there, What's your name?🤔\n"));


welcomeUser(userName);


console.log(color.hex('#FC766AFF')(`Hey👋  ${userName}. Are you ready for the game? This game is about how well you know me.\n\nPress enter to read Rules\n\n`));

readlineSync.question();


console.log(color.hex('#CDB599FF')('---------------------------------------------------------------------------------------'));
ruleBook();

console.log(color.hex('#CDB599FF')('---------------------------------------------------------------------------------------\n'));

console.log(color.hex('#FFD700')('**********************************************************************************'));

for(var q of questionList){
	game(q.que,q.ans,q.fact);
}

console.log(color.hex('#FC766AFF')('Your total score is '+ color.green(score) + '.\nBelow is the Leaderboard\n'));

showLeaderBoard(leaderBoard);