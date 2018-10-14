import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#323232', // lighter dark
			main: '#282828' // dark
		},
		secondary: {
			main: '#dc4fad' //sort of pink
		},
		error: {
			main: '#d24726' //ligh red
		},
		text: {
			primary: 'rgba(255,255,255,0.87)', //obviously white
			secondary: '#202020' //dark almost completely black
		},
		background: {
			paper: '#282828',
			default: '#282828' //sort of pink
		}
	}
});
