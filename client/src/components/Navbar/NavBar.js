import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from "@material-ui/core/Button"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]:{
    flexGrow: 1
}
  },
  navBarOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
}));

const NavBar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);

  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            Menu
          </Typography>

        <div>
            { isMobile ? (
            <><IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/login')}>Login</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/tournament')}>Tournament</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/dashboard')}>Dashboard</MenuItem>
              
              </Menu>
            </>) : (
            <>
            <div className = {classes.navBarOptions}>
                <Button variant="contained" onClick ={ () => handleButtonClick('/')}> 
                    Home
                </Button>
                <Button variant="contained" onClick ={ () => handleButtonClick('/login')}> 
                    Login
                </Button>
                <Button variant="contained" onClick ={ () => handleButtonClick('/tournament')}> 
                    Tournament
                </Button>
                <Button variant="contained" onClick ={ () => handleButtonClick('/dashboard')}> 
                    Dashboard
                </Button>
            </div>    
            </>
                )}
        </div>
            </Toolbar>
      </AppBar>  
    </div>
  );
};

export default withRouter(NavBar);