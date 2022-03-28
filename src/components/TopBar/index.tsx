import { AppBar, Box, Button, IconButton, Toolbar } from "@material-ui/core";
import {
  AccountCircle as AccountCircleIcon,
  Apps as AppsIcon,
  Menu as MenuIcon,
  MoreVert as MoreVertIcon,
  VideoCall as VideoCallIcon,
} from "@material-ui/icons";
import { useStyles } from "./styles";

export function TopBar() {
  const classes = useStyles();

  return (
    <AppBar color="inherit" className={classes.AppBar}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.MenuIcon}
        >
          <MenuIcon />
        </IconButton>
        <img src="/images/preto.png" alt="Logo" className={classes.Logo} />
        <Box className={classes.Grow} />
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.Icons}
        >
          <VideoCallIcon />
        </IconButton>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.Icons}
        >
          <AppsIcon />
        </IconButton>
        <IconButton
          className={classes.Icons}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MoreVertIcon />
        </IconButton>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<AccountCircleIcon />}
        >
          Fazer Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
