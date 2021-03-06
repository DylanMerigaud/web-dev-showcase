import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import IconButton from "@material-ui/core/IconButton";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";

import OnVisible from "react-on-visible";

import SubscribeNewsletter from "./SubscribeNewsletter";

import background from "./../assets/images/ball-basketball-basketball-court-1752757.jpg";
import logo from "./../assets/images/logo.svg";

const Home = () => {
  const classes = useStyles();
  const [sectionShown, setSectionShown] = useState(false);

  return (
    <React.Fragment>
      <div className={classes.section1Bg} />

      <OnVisible
        onChange={e => {
          setSectionShown(true);
        }}
      >
        <section className={classes.section1} id="landing">
          <Slide direction="down" in={sectionShown} timeout={{ enter: 1500 }}>
            <img className={classes.logo} src={logo} alt="logo" />
          </Slide>
          <Slide direction="down" in={sectionShown} timeout={{ enter: 1200 }}>
            <h1 className={classes.title} component="h1">
              BasketTown
            </h1>
          </Slide>
          <Slide direction="down" in={sectionShown} timeout={{ enter: 900 }}>
            <p className={classes.slogan}>
              L'appli pour mettre en relation des joueurs de basketball.
            </p>
          </Slide>
          <Fade in={sectionShown} timeout={{ enter: 4000 }}>
            <div>
              <p className={classes.newsletterText}>
                Intéressé ? Inscris-toi à la newsletter.
              </p>
              <SubscribeNewsletter />
            </div>
          </Fade>
          {/* <Box>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://docs.google.com/forms/d/e/1FAIpQLSdBqROP8U3D8dnAQZ3U3c9PILeGY8Kl42t9eZcLkmUSGNMbTw/viewform?usp=sf_link">
      formulaire
    </a>
	</Box> */}
          <Zoom in={sectionShown} timeout={{ enter: 2000 }}>
            <IconButton className={classes.arrowNext} href="#project">
              <ExpandMore className={classes.arrowNextIcon} />
            </IconButton>
          </Zoom>
        </section>
      </OnVisible>
    </React.Fragment>
  );
};

const useStyles = makeStyles({
  section1: {
    position: "relative",
    color: "white",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center"
  },
  section1Bg: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.6)"
  },
  title: {
    fontSize: "3rem",
    marginTop: 8,
    marginBottom: 8
  },
  slogan: {
    fontSize: "1.2rem",
    marginTop: 8,
    textAlign: "center",
    paddingLeft: 16,
    paddingRight: 16
  },
  arrowNext: {
    position: "absolute",
    bottom: 16,
    color: "white",
    transition: "transform ease-in-out 0.25s",
    "&:hover $arrowNextIcon": {
      transform: "translateY(4px)"
    }
  },
  arrowNextIcon: {
    fontSize: "3rem",
    transition: "transform ease-in-out 0.25s"
  },
  newsletterText: {
    fontSize: "0.8rem"
  },
  logo: {
    marginTop: -52,
    width: 196
  }
});

export default Home;
