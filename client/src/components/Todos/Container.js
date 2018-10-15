import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MainNavigation from "../UI/Navigation/MainNavigation";
import List from "./List";

const styles = {
  root: {
    width: "100%"
  },
  rootLogo: {
    flexDirection: "column"
  },
  rootItem: {
    margin: "0 auto"
  },
  title: {
    marginTop: "1.5em"
  }
};

class Container extends React.Component {
  onChange = date => {
    console.log(date);
  };

  render() {
    return (
      <React.Fragment>
        <MainNavigation />
        <List date={this.props.date} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Container);
