import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CheckCircle from '@material-ui/icons/CheckCircle';

function RadioBtnChecked() {
	return (
		<IconButton>
			<CheckCircle color="error" />
		</IconButton>
	);
}

export default RadioBtnChecked;
