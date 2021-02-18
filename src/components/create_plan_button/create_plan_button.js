import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// import { Grid } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      background:"white",
      borderRadius: 25,
      color:'#0d47a1',
      fontWeight: 'bold',
    //   display:'flex',
    },
    
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
      <Box  width="16%">
    <div  border={0} className={classes.root}>
      <Button  variant="contained" fontWeight='400' >create a plan</Button>
    </div></Box>
  );
}
