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

export const now = moment();

// This is some dummy data todos
// {
// 	id: shortid.generate(),
// 	topic: 'exercise',
// 	description: 'Remember that you want to win the next thetratlon',
// 	dueDate: now.format('Do MMM'),
// 	reminder: '5pm',
// 	repeat: 'every week',
// 	color: 'yellow',
// 	completed: false,
// 	userId: 2
// },
// {
// 	id: shortid.generate(),
// 	topic: 'take a nap',
// 	description: 'This is a recommendation from the book of life',
// 	dueDate: now.format('Do MMM'),
// 	reminder: '2pm',
// 	repeat: 'every month',
// 	color: 'yellow',
// 	completed: false,
// 	userId: 3
// },
// {
// 	id: shortid.generate(),
// 	topic: 'watch the movie Titanic',
// 	description: 'For free next Friday',
// 	dueDate: now.format('Do MMM'),
// 	reminder: '8pm',
// 	repeat: 'none',
// 	color: 'yellow',
// 	completed: false,
// 	userId: 3
// },
// {
// 	id: shortid.generate(),
// 	topic: 'Eat dinner with Bebe',
// 	description: 'My cat needs me',
// 	dueDate: now.format('Do MMM'),
// 	reminder: '6pm',
// 	repeat: 'every month',
// 	color: 'yellow',
// 	completed: false,
// 	userId: 3
// }
