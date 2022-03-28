import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  AppBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  MenuIcon: {
    marginRight: theme.spacing(2),
  },
  Icons: {
    marginRight: theme.spacing(3),
  },
  Grow: {
    flexGrow: 1,
  },
  Logo: {
    height: 30,
  },
}));
