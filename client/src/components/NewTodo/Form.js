import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import Button from "@material-ui/core/Button";
import ReOrderIcon from "@material-ui/icons/Reorder";
import AlarmIcon from "@material-ui/icons/Alarm";
import FlagIcon from "@material-ui/icons/Flag";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

const tableCell = {
  width: "100%",
  padding: 0,
  borderBottom: "none",
  color: "#fafafa"
};
const calendarCell = {
  width: 110,
  padding: 8,
  borderBottom: "none"
};

const AddBtn = {
  margin: 0,
  color: "#fafafa",
  backgroundColor: "#d24726",
  "&:hover": {
    backgroundColor: "#CD0000"
  }
};

const DeleteBtn = {
  margin: 0,
  color: "#fafafa"
};

class Form extends React.Component {
  cancelNewTodo = () => {
    this.props.cancelNewTodo;
  };
  render() {
    const now = moment();
    const classes = this.props;
    return (
      <form>
        <Table>
          <TableBody>
            <TableRow>
              {/* New Todo Input */}
              <TableCell style={tableCell}>
                <TextField
                  style={tableCell}
                  id="outlined-name"
                  label="e.g: Make pizza"
                  className={classes.textField}
                  value="something coming from Root state"
                  margin="normal"
                  variant="filled"
                />
              </TableCell>
              {/* Calendar */}
              <TableCell style={calendarCell}>{now.format("MMM Do")}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableBody>
            <TableRow>
              {/* Create and Delete Todo buttons */}
              <TableCell style={tableCell}>
                <Button variant="contained" size="medium" style={AddBtn}>
                  Add Task
                </Button>
                <Button
                  onClick={this.props.cancelNewTodo}
                  onBlur={this.props.cancelNewTodo}
                  variant="text"
                  size="medium"
                  style={DeleteBtn}
                >
                  Delete
                </Button>
              </TableCell>
              {/* Project, Notifications and Priority icons */}
              <TableCell
                style={{
                  display: "inline-flex",
                  borderBottom: "none"
                }}
              >
                <IconButton>
                  <ReOrderIcon />
                </IconButton>
                <IconButton>
                  <AlarmIcon />
                </IconButton>
                <IconButton>
                  <FlagIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </form>
    );
  }
}

export default Form;
