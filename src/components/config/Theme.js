import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#5B3E96', // lighter violet
			main: '#221738' //very dark violet
		},
		secondary: {
			main: '#EFF5F8' //black dark
		},
		error: {
			main: '#FF5C5C' //ligh red
		},
		text: {
			primary: '#FFFFFF', //obviously white
			secondary: '#050505' //dark almost completely black
		},
		background: {
			paper: '#140A26', //black dark
			default: '#140A26' //snow white
		}
	}
});
