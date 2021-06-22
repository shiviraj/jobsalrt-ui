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
        fontSize: 14,
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
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
        cursor: "default",
        padding: theme.spacing(1, 2),
        borderBottom: `1px solid ${theme.palette.grey[300]}`
    },
    mobileMenu: {
        display: 'block', [theme.breakpoints.up('md')]: {display: 'none'},
        "& > * > *": {
            width: theme.spacing(28),
        }
    }
});


const Menubar = ({openDrawer, setOpenDrawer}) => {
    const classes = useStyles();

    const NavLink = ({path, text}) => {
        const {category} = useRouter().query
        const pathName = useRouter().pathname
        return <Link href={path}>
            <div
              className={path.includes(category) || path === pathName ? `${classes.active} ${classes.link}` : classes.link}
              onClick={() => setOpenDrawer(false)}
            >
                {text}
            </div>
        </Link>
    }

    return (<div id="back-to-top-anchor">
        <div className={classes.desktopMenu}>
            <NavLink path="/" text="HOME"/>
            <NavLink path="/all-jobs/page/1/posts" text="ALL JOB"/>
            <NavLink path="/latest-jobs/page/1/posts" text="LATEST JOB"/>
            <NavLink path="/admit-cards/page/1/posts" text="ADMIT CARD"/>
            <NavLink path="/results/page/1/posts" text="RESULT"/>
            <NavLink path="/answer-keys/page/1/posts" text="ANSWER KEY"/>
            <NavLink path="/admissions/page/1/posts" text="ADMISSION"/>
        </div>
        <Drawer open={openDrawer} className={classes.mobileMenu} onClose={() => setOpenDrawer(false)}>
            <div className={classes.linkHeader}>
                <Typography variant="subtitle1"><b>Jobs</b>Alrt</Typography>
                <IconButton size="small" onClick={() => setOpenDrawer(false)}><Close/></IconButton>
            </div>
            <NavLink path="/" text="HOME"/>
            <NavLink path="/all-jobs/page/1/posts" text="ALL JOB"/>
            <NavLink path="/latest-jobs/page/1/posts" text="LATEST JOB"/>
            <NavLink path="/admit-cards/page/1/posts" text="ADMIT CARD"/>
            <NavLink path="/results/page/1/posts" text="RESULT"/>
            <NavLink path="/syllabus/page/1/posts" text="SYLLABUS"/>
            <NavLink path="/answer-keys/page/1/posts" text="ANSWER KEY"/>
            <NavLink path="/admissions/page/1/posts" text="ADMISSION"/>
        </Drawer>
    </div>);
}

export default Menubar
