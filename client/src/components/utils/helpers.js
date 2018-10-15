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
