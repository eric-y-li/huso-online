import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: 'transparent', 
      boxShadow: 'none'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      [theme.breakpoints.down("xs")]:{flexGrow: 1}
    },
    navBarOptions: {
      display: "flex",
      flex: 1,
      justifyContent: "space-evenly",
    },
  })); // ok for some reason just exporting tis 