import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import HandleCompletedTask from '../Todos/HandleCompletedTask';

const styles = {
	invisibleSpace: {
		width: 27,
		height: 20,
		marginLeft: -27,
		marginTop: 13
	}
};

function TodoMap(props) {
	const { classes } = props;
	const todos = props.todos;
	if (Object.keys(todos.length !== 0 && todos.constructor === Object)) {
		return (
			<React.Fragment>
				{todos.map((t) => (
					<ListItem key={t.id}>
						<div className={classes.invisibleSpace} />
						<Table>
							<TableBody>
								<TableRow>
									{/* icons for completed and not completed */}
									<TableCell>
										<HandleCompletedTask taskId={t.id} />
									</TableCell>
									{/* task name */}
									<TableCell>
										<ListItemText>{t.task}</ListItemText>
										<ListItemText>{t.dueDate.now}</ListItemText>
									</TableCell>
									{/* Portal with gear menu */}
									<TableCell>
										<IconButton>
											<MoreHoriz />
										</IconButton>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</ListItem>
				))}
			</React.Fragment>
		);
	} else {
		return null;
	}
}

TodoMap.propTypes = {
	todos: PropTypes.array.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoMap);
