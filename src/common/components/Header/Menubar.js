import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import theme from "../../../theme/theme";
import Link from "next/link"
import {useRouter} from "next/router";
import {Drawer, IconButton, Typography} from "@material-ui/core";
import {Close} from "@material-ui/icons";

const useStyles = makeStyles({
  desktopMenu: {
    display: 'none', [theme.breakpoints.up('md')]: {display: 'flex',},
    marginTop: theme.spacing(5.4),
    backgroundColor: theme.palette.common.white,
    justifyContent: "flex-start",
    boxShadow: theme.shadows[4],
    borderBottom: `1px solid ${theme.palette.primary.light}`,
    "&>*": {textAlign: "center",}
  },
  link: {
    padding: theme.spacing(1, 2),
    width: theme.spacing(14),
    borderRadius: 0,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.primary.extraLight,
      color: theme.palette.common.black,
    }
  },
  active: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    [theme.breakpoints.up('md')]: {
      borderBottom: `2px solid ${theme.palette.primary.dark}`,
    },
  },
  linkHeader: {
    display: "flex",
    justifyContent: "space-between",
    cursor: "default"
  },
  mobileMenu: {
    display: 'block', [theme.breakpoints.up('md')]: {display: 'none'},
    "& > * > *": {
      width: theme.spacing(28)
    }
  }
});


const Menubar = ({openDrawer, setOpenDrawer}) => {
  const classes = useStyles();

  const NavLink = ({path, text}) => {
    const pathName = useRouter().pathname
    return <Link href={path}>
      <div className={path === pathName ? `${classes.active} ${classes.link}` : classes.link}
           onClick={() => setOpenDrawer(false)}
      >
        {text}
      </div>
    </Link>
  }

  return (<div id="back-to-top-anchor">
    <div className={classes.desktopMenu}>
      <NavLink path="/" text="HOME"/>
      <NavLink path="/posts" text="LATEST JOB"/>
      <NavLink path="/l" text="ADMIT CARD"/>
      <NavLink path="/p" text="RESULT"/>
      <NavLink path="/p" text="ANSWER KEY"/>
      <NavLink path="/p" text="SYLLABUS"/>
      <NavLink path="/p" text="ADMISSION"/>
    </div>
    <Drawer open={openDrawer} className={classes.mobileMenu} onClose={() => setOpenDrawer(false)}>
      <div className={`${classes.link} ${classes.linkHeader}`}>
        <Typography variant="subtitle1"><b>Jobs</b>Alrt</Typography>
        <IconButton size="small" onClick={() => setOpenDrawer(false)}><Close/></IconButton>
      </div>
      <NavLink path="/" text="HOME"/>
      <NavLink path="/posts" text="LATEST JOB"/>
      <NavLink path="/l" text="ADMIT CARD"/>
      <NavLink path="/p" text="RESULT"/>
      <NavLink path="/p" text="ANSWER KEY"/>
      <NavLink path="/p" text="SYLLABUS"/>
      <NavLink path="/p" text="ADMISSION"/>
    </Drawer>
  </div>);
}

export default Menubar

//
// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });
//
// export default function TemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });
//
//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//
//     setState({ ...state, [anchor]: open });
//   };
//
//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
//
//   return (
//     <div>
//         <React.Fragment>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//     </div>
//   );
// }
