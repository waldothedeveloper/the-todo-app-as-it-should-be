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