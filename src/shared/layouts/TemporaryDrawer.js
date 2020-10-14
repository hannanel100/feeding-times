import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";

import DrawerLinks from "./DrawerLinks";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
// import BarChartIcon from "@material-ui/icons/BarChart";
// import SettingsIcon from "@material-ui/icons/Settings";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();

  // const list = () => (
  //   <div
  //     className={classes.fullList}
  //     role="presentation"
  //     onClick={props.toggleDrawer(false)}
  //     onKeyDown={props.toggleDrawer(false)}
  //   >
  //     <List>
  //       {["About", "Summary", "Settings"].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>
  //             {index === 0 ? (
  //               <ChildFriendlyIcon />
  //             ) : index === 1 ? (
  //               <BarChartIcon />
  //             ) : (
  //               <SettingsIcon />
  //             )}
  //           </ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //   </div>
  // );

  return (
    <div>
      <>
        <Drawer
          anchor="left"
          open={props.isOpen}
          onClose={props.toggleDrawer(false)}
        >
          <DrawerLinks toggleDrawer={props.toggleDrawer} isOpen={props.isOpen} />
        </Drawer>
      </>
    </div>
  );
}
