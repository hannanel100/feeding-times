import { Icon, InlineIcon } from "@iconify/react";
import twitterIcon from "@iconify/icons-mdi/twitter";
import githubIcon from "@iconify/icons-mdi/github";
import linkedinIcon from "@iconify/icons-mdi/linkedin";

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://hannanel-portfolio.netlify.app/">
        hannanel
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    justifyContent: "center",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm" className={classes.gridContainer}>
          <Link href="https://twitter.com/hannanel100">
            <Icon icon={twitterIcon} width="2rem" />
          </Link>
          <Link href="https://github.com/hannanel100">
            <Icon icon={githubIcon} width="2rem" />
          </Link>
          <Link href="https://www.linkedin.com/in/hannanel-gershinsky/">
            <Icon icon={linkedinIcon} width="2rem" />
          </Link>
        </Container>
        <Container maxWidth="sm">
          <Typography variant="body1"></Typography>

          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
