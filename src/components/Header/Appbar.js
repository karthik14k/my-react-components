import React from 'react'

import { Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import MUiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MobileAppbar from './MobileAppbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles( theme => ({
  title: {
    flexGrow: 1,
  },
  buttonBar: { 
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

const Appbar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickSublist = () => {
    setOpen(!open);
  };

  const handleClick = (event) => {
    console.log(event)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MUiAppBar>
      <Grid  item>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>My Logo</Typography>
          <MobileAppbar>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItem button onClick={handleClickSublist}>
                <ListItemText primary="Item-1" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Item 1-1" />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Item 1-2" />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button>
                <ListItemText primary="Item-2" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Item-3" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Item-4" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Item-5" />
              </ListItem>
            </List>
          </MobileAppbar>
          <Box className={classes.buttonBar}>
            <Button 
              color="inherit" 
              aria-controls="services-menu" 
              aria-haspopup="true"
              onClick={(e) => handleClick(e)}
            >Item-1</Button>
            <Menu
              id="services-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              onClose={() => handleClose()}
            >
              <MenuItem onClick={() => handleClose()}>Item 1-1</MenuItem>
              <MenuItem onClick={() => handleClose()}>Item 1-2</MenuItem>
            </Menu>
            <Button color="inherit">Item-2</Button>
            <Button color="inherit">Item--3</Button>
            <Button color="inherit">Item--4</Button>
            <Button color="inherit">Item--5</Button>
          </Box>
        </Toolbar>
      </Grid>
    </MUiAppBar>
  )
}

export default Appbar;