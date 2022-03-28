import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  Drawer: {
    width: 240,
    flexShrink: 0,
  },
  DrawerPaper: {
    width: 240,
    borderRight: "none",
  },
  DrawerContainer: {},
  DrawerListItem: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  },
  DrawerListItemText: {
    fontSize: 14,
  },
}));
