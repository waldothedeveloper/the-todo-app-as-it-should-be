import moment from 'moment';

export const subtitlesArray = [
	'Another To-do App',
	'Better done than sorry',
	'Just do it',
	"Don't leave it for tomorrow",
	'Let another task fulfill you',
	"If things don't get better, better get it done"
];

export const randomNum = (number) => {
	return Math.floor(Math.random() * Math.floor(number));
};

export const now = moment().format("dddd");

// Time Greeting
export let greetings = null

switch ( new Date().getHours() ) {
	case 0: 
	greetings = "It's midnight... do you ever sleep?"
	break;
	
	case 1:
	greetings = "Good morning! 1AM and still your going! "
	break;

	case 2:
	greetings = "Hey, it is past 2AM! The bars must be closed!"
	break;

	case 3:
	greetings = "Hey, it is after 3AM! Are you a vampire or what?"
	break;

	case 4:
	greetings = "4AM? You must roam all night huh!"
	break;

	case 5:
	greetings = "Whoa! It's almost daylight and your still going!"
	break;

	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
	greetings = "Good Morning!"
	break;

	case 11:
	greetings = "11AM...What are you doing surfing JavaScript pages so early??"
	break;

	case 12:
	greetings = "NOON! Great, it must be time for me to eat breakfast!"
	break;

	case 14:
	greetings = "It's 2PM. Have you eaten lunch yet??"
	break;

	case 15:
	case 16:
	case 13:
	greetings = "Good Afternoon!"
	break;

	case 17:
	case 18:
	case 19:
	case 20:
	case 21:
	case 22:
	greetings = "Good Evening!"
	break;

	case 23:
	greetings = "It's almost midnight...Aren't you sleepy yet?"
	break;

	default:
		greetings = null

}






// {
// 	id: shortid.generate(),
// 	task: 'call my work',
// 	dueDate: 'Sometime in the calendar',
// 	reminder: '12am',
// 	repeat: 'every hour',
// 	priority: 'red',
// 	completed: false,
// 	userId: 1
// }
