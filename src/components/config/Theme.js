import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#5B3E96', // lighter violet
			main: '#221738' //very dark violet
		},
		secondary: {
			main: '#140A26' //dark black
		},
		error: {
			main: '#FF5C5C' //ligh red
		},
		text: {
			primary: '#ffffff', //obviously white
			secondary: '#050505' //dark almost completely black
		},
		background: {
			paper: '#140A26', //black dark
			default: '#140A26'
		}
	}
});
