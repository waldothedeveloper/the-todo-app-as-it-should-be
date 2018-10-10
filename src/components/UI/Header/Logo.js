import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FlipToFront from '@material-ui/icons/FlipToFront';

const Logo = () => {
	return (
		<IconButton>
			<FlipToFront color="secondary" fontSize="large" />
		</IconButton>
	);
};

export default Logo;
