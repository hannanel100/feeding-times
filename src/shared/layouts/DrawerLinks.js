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
import TableChartIcon from "@material-ui/icons/TableChart";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
});

export default function DrawerLinks() {
  const classes = useStyles();
  const location = useLocation();
  const listItems = [
    {
      name: "About",
      path: "/about",
      icon: <ChildFriendlyIcon color="primary" />,
    },
    {
      name: "Summary",
      path: "/summary",
      icon: <BarChartIcon color="primary" />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <TableChartIcon color="primary" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <SettingsIcon color="primary" />,
    },
  ];
  let filteredListItems = listItems.filter(
    (el) => el.path !== location.pathname
  );
  let list = (
    <div className={classes.fullList} role="presentation">
      <Divider />
      <List>
        {filteredListItems.map((obj, index) => (
          <Link to={obj.path} className={classes.link} key={index}>
            <ListItem button key={index}>
              <ListItemIcon>{obj.icon}</ListItemIcon>
              <ListItemText primary={obj.name} />
            </ListItem>
          </Link>
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
