import React, { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./Components/Player.js";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi(); //creating an instance inside the app which allows us to communicate with spotfy

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  // runs function code based on condition - leave dependecy blank if running once.
  useEffect(() => {
    //keep an eye on the url to see if anthing changes and if it does then we fire off some code
    const hash = getTokenFromUrl();
    window.location.hash = "";
    console.log("your full hash token is:", hash);

    const _token = hash.access_token;
    console.log("your hash token is:", _token);

    if (_token) {
      dispatch({
        //send token to the data layer
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token); //giving the token to the spot api
      // test the api connection. use getme() to get the suer data
      spotify.getMe().then((user) => {
        // console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      // make the call. capture the response.Putting it into the data later as discover weekly
      spotify.getPlaylist("37i9dQZEVXcLHTctBeNji1").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }

    console.log("your state token is:", token);
  }, [token, dispatch]);

  console.log("🙂", user);
  console.log("👻", token);

  return (
    <div className="App">
      {token ? <Player spotify={spotify}></Player> : <Login></Login>}

      {/* React context pi - state providers, reducers, , spotify api, material UI, user authentication */}
      {/* spotify logo https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg */}
      {/* LOGIN PAGE - USER LOG IN USING SPOTIFY DETAILS INTEGRATION WITH USER AUTHENTICATION */}
      {/* PAGE TOP */}
      {/* SIDEBAR - ICONS, PLAYLISTS */}
      {/* MAIN */}
      {/* HEADER - SEARCH INPUT , AVATAR AND NAME */}
      {/* HOME - DISCOVERWEEKLY, PLAY PANEL, LIST OF TRACKS*/}
      {/* PAGE BOTTOM - PLAYER, volume control, skip tracks */}
    </div>
  );
}

export default App;
