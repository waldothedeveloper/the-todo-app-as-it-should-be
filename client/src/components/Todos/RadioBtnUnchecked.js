import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';

function RadioBtnChecked() {
	return (
		<IconButton>
			<RadioButtonUnchecked color="error" />
		</IconButton>
	);
}

export default RadioBtnChecked;
