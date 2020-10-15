import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import BarChartIcon from "@material-ui/icons/BarChart";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrawerLinks() {
  const classes = useStyles();
  console.log();
  let list = (
    <div className={classes.fullList} role="presentation">
      <List>
        {[
          { name: "About", icon: <ChildFriendlyIcon color="primary" /> },
          { name: "Summary", icon: <BarChartIcon color="primary" /> },
          { name: "Settings", icon: <SettingsIcon color="primary" /> },
        ].map((obj, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{obj.icon}</ListItemIcon>
            <ListItemText primary={obj.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  //   if (props.isOpen) {
  //     list = (props) => (
  //       <div
  //         className={classes.fullList}
  //         role="presentation"
  //         onClick={props?.toggleDrawer(false)}
  //         onKeyDown={props?.toggleDrawer(false)}
  //       >
  //         <List>
  //           {["About", "Summary", "Settings"].map((text, index) => (
  //             <ListItem button key={text}>
  //               <ListItemIcon>
  //                 {index === 0 ? (
  //                   <ChildFriendlyIcon />
  //                 ) : index === 1 ? (
  //                   <BarChartIcon />
  //                 ) : (
  //                   <SettingsIcon />
  //                 )}
  //               </ListItemIcon>
  //               <ListItemText primary={text} />
  //             </ListItem>
  //           ))}
  //         </List>
  //         <Divider />
  //       </div>
  //     );
  //   } else {
  //     list = () => (
  //       <div className={classes.fullList} role="presentation">
  //         <List>
  //           {["About", "Summary", "Settings"].map((text, index) => (
  //             <ListItem button key={text}>
  //               <ListItemIcon>
  //                 {index === 0 ? (
  //                   <ChildFriendlyIcon />
  //                 ) : index === 1 ? (
  //                   <BarChartIcon />
  //                 ) : (
  //                   <SettingsIcon />
  //                 )}
  //               </ListItemIcon>
  //               <ListItemText primary={text} />
  //             </ListItem>
  //           ))}
  //         </List>
  //         <Divider />
  //       </div>
  //     );
  //   }

  return list;
}