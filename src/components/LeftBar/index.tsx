import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  AccountCircle as AccountCircleIcon,
  History as HistoryIcon,
  Home as HomeIcon,
  Subscriptions as SubscriptionsIcon,
  VideoLibrary as VideoLibraryIcon,
  Whatshot as WhatshotIcon,
} from "@material-ui/icons";
import { useStyles } from "./styles";

export function LeftBar() {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={classes.Drawer}
      classes={{ paper: classes.DrawerPaper }}
    >
      <Toolbar />
      <Box className={classes.DrawerContainer}>
        <List>
          <ListItem
            button
            classes={{
              root: classes.DrawerListItem,
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.DrawerListItemText,
              }}
              primary="Início"
            />
          </ListItem>
          <ListItem
            button
            classes={{
              root: classes.DrawerListItem,
            }}
          >
            <ListItemIcon>
              <SubscriptionsIcon />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.DrawerListItemText,
              }}
              primary="Em alta"
            />
          </ListItem>
          <ListItem
            button
            classes={{
              root: classes.DrawerListItem,
            }}
          >
            <ListItemIcon>
              <WhatshotIcon />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.DrawerListItemText,
              }}
              primary="Inscrições"
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            classes={{
              root: classes.DrawerListItem,
            }}
          >
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText
              primary="Biblioteca"
              classes={{
                primary: classes.DrawerListItemText,
              }}
            />
          </ListItem>
          <ListItem
            button
            classes={{
              root: classes.DrawerListItem,
            }}
          >
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText
              primary="Histórico"
              classes={{
                primary: classes.DrawerListItemText,
              }}
            />
          </ListItem>
        </List>
        <Divider />
        <Box p={3}>
          <Typography variant="body2">
            Faça login para curtir vídeos, comentar e se increver.
          </Typography>
          <Box mt={2}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AccountCircleIcon />}
            >
              Fazer login
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
