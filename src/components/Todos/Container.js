import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MainNavigation from '../UI/Navigation/MainNav';

const styles = {
	root: {
		width: '100%'
	},
	rootLogo: {
		flexDirection: 'column'
	},
	rootItem: {
		margin: '0 auto'
	},
	title: {
		marginTop: '1.5em'
	}
};

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(date) {
		console.log(date);
	}

	render() {
		return (
			<React.Fragment>
				<MainNavigation />
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(Container);
