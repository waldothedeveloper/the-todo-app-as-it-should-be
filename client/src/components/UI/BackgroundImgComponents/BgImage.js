import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import dayoff1 from '../../../images/dayoff1.png'
import dayoff2 from '../../../images/dayoff2.png'
import dayoff3 from '../../../images/dayoff3.png'
import { greetings } from '../../utils/helpers';

const styles = theme => ({
  root : {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 181,
    marginBottom: theme.spacing.unit * 2,
  },
  text: {
    margin: '0 auto',
    textAlign: 'center',
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4
  }
})

const day = new Date().getDay()

function BgImage(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      { day === 5 ? (
        <React.Fragment>
            <img className={classes.img} src={dayoff2} alt="" />
          <Typography className={classes.text} variant="subtitle1" gutterBottom> You're all done for the week!</Typography>
          <Typography variant="body2">{greetings}</Typography>
        </React.Fragment>
        ) : (day === 6 || day === 0) ? (
          <React.Fragment>
            <img className={classes.img} src={dayoff3} alt="" />
            <Typography className={classes.text} variant="subtitle1" gutterBottom> Enjoy your day off!</Typography>
            <Typography variant="body2">{greetings}</Typography>
        </React.Fragment>
        ) : (
          <React.Fragment>
             <img className={classes.img} src={dayoff1} alt="" />
            <Typography className={classes.text} variant="subtitle1" gutterBottom> You're all done for the day!</Typography>
            <Typography variant="body2">{greetings}</Typography>
          </React.Fragment>
      )
      }
    </div>
  )
}

export default withStyles(styles)(BgImage);