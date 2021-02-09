import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(120),
    fontWeight: 'bold',
  },
  
  spoon: {
    color:'primary',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="white" position="static">
        <Toolbar>
       
          <Typography color="primary" variant="h4" className={classes.title}>
            MyVotePlan
          </Typography>
          <Button color="primary">FAQ</Button>
          
          <Button color="primary">Contact Us</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
