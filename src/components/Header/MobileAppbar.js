import React, { useState } from 'react';

import { Box, Drawer } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  buttonCollapse: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
  },
  drawerClose:{
    marginRight: 0,
    marginLeft: 'auto',
  },
  drawer: {
    minWidth: '360px',
  },
  drawerPaper: {
    minWidth: '360px',
  },
}));

const MobileAppbar = (props) => {
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (event) => {
    setDrawerState(!drawerState)
  };
  return (
    <Box className={classes.buttonCollapse}>
      <IconButton color='inherit' onClick={(e) => toggleDrawer(e)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.paper}
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="right"
        open={drawerState}
        onClose={(e) => toggleDrawer(e) }
      >
        <IconButton className={classes.drawerClose} onClick={(e) => toggleDrawer(e)}>
          <CloseIcon />
        </IconButton>
        {props.children}
      </Drawer>
    </Box>
  )
}

export default MobileAppbar;