import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@material-ui/core";
import avatar from "../../../staticFile/images/avatar.png";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  root: {
    width: "70%",
  },
  avatarSpacing: {
    marginLeft: "16px",
    display: "flex",
    alignItems: "center",
  },
  contentUserMobie: {
    marginLeft: "16px",
    display: "block",
    width: "calc(100% - 40px)",
    color: "#000",
  },
  fontSize: {
    fontSize: "20px",
    padding: "20px 0",
  },
  spaceLeft: {
    marginLeft: "10px",
  },
}));

export default function RightDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemIcon className={classes.avatarSpacing}>
          <Avatar alt="avatar" src={avatar} />
          <ListItemText primary="Trần Hải Bình" className={classes.spaceLeft} />
        </ListItemIcon>
      </List>
      <Divider />
      <List>
        <ListItemIcon className={classes.contentUserMobie}>
          <ListItemText
            primary="Lịch chiếu"
            classes={{ primary: classes.fontSize }}
          />
          <ListItemText
            primary="Cụm Rạp"
            classes={{ primary: classes.fontSize }}
          />
          <ListItemText
            primary="Tin Tức"
            classes={{ primary: classes.fontSize }}
          />
          <ListItemText
            primary="Ứng dụng"
            classes={{ primary: classes.fontSize }}
          />
          <ListItemText
            primary="Đăng xuất"
            classes={{ primary: classes.fontSize }}
          />
        </ListItemIcon>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer("right", true)}>
        <MenuIcon />
      </Button>
      <Drawer
        transitionDuration={1000}
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        classes={{ paper: classes.root }}
      >
        {list("right")}
      </Drawer>
    </React.Fragment>
  );
}
