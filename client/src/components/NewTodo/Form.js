import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import ReOrderIcon from '@material-ui/icons/Reorder';
import AlarmIcon from '@material-ui/icons/Alarm';
import FlagIcon from '@material-ui/icons/Flag';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

const tableCell = {
	width: '100%',
	padding: 0,
	borderBottom: 'none',
	color: '#fafafa'
};
const calendarCell = {
	width: 110,
	padding: 8,
	borderBottom: 'none'
};

const AddBtn = {
	margin: 0,
	color: '#fafafa',
	backgroundColor: '#d24726',
	'&:hover': {
		backgroundColor: '#CD0000'
	}
};

const CancelTaskBtn = {
	margin: 0,
	color: '#fafafa'
};

const iconColor = {
		color: '#fff'
}

class Form extends React.Component {
	cancelNewTask = (event) => {
		this.props.cancelNewTask(event);
	};

	handleTaskChange = (event) => {
		this.props.handleTaskChange(event);
	};

	handleNewTask = (event) => {
		this.props.handleNewTask(event);
	};

	render() {
		const now = moment();
		const classes = this.props;
		return (
			<form onSubmit={this.handleNewTask}>
				<Table>
					<TableBody>
						<TableRow>
							{/* New Todo Input */}
							<TableCell style={tableCell}>
								<TextField
									onChange={this.handleTaskChange}
									type="text"
									style={tableCell}
									id="outlined-name"
									label="e.g: Make pizza"
									className={classes.textField}
									value={this.props.task}
									margin="normal"
									variant="filled"
								/>
							</TableCell>
							{/* Calendar */}
							<TableCell style={calendarCell}>{now.format('MMM Do')}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
				<Table>
					<TableBody>
						<TableRow>
							{/* Create and Cancel Todo buttons */}
							<TableCell style={tableCell}>
								<Button variant="contained" size="medium" style={AddBtn} value="Submit" type="submit">
									Add Task
								</Button>
								<Button variant="text" size="medium" style={CancelTaskBtn} onClick={this.cancelNewTask}>
									Cancel
								</Button>
							</TableCell>
							{/* Project, Notifications and Priority icons */}
							<TableCell
								style={{
									display: 'inline-flex',
									borderBottom: 'none'
								}}
							>
								<IconButton>
									<ReOrderIcon style={iconColor}/>
								</IconButton>
								<IconButton>
									<AlarmIcon style={iconColor}/>
								</IconButton>
								<IconButton>
									<FlagIcon style={iconColor}/>
								</IconButton>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</form>
		);
	}
}

Form.propTypes = {
	task: PropTypes.string.isRequired,
	cancelNewTask: PropTypes.func.isRequired,
	handleTaskChange: PropTypes.func.isRequired,
	handleNewTask: PropTypes.func.isRequired
};
export default Form;
