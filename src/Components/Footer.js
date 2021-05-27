import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://img.discogs.com/wgrc1A9t3Lo8JjTsYBkP1h7u-OA=/fit-in/600x538/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6333477-1416700006-8888.jpeg.jpg"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Fly Me To The Moon</h4>
          <p>Frank Sinatra</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green"></ShuffleIcon>
        <SkipPreviousIcon className="footer_icon"></SkipPreviousIcon>
        <PlayCircleOutlineIcon
          className="footer__icon"
          fontSize="large"
        ></PlayCircleOutlineIcon>
        <SkipNextIcon className="footer_icon"></SkipNextIcon>
        <RepeatIcon className="footer_icon"></RepeatIcon>
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon></PlaylistPlayIcon>
          </Grid>
          <Grid item>
            <VolumeDownIcon></VolumeDownIcon>
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider"></Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
