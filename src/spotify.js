//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// create endpoint for log in button for spotify auth api
export const authEndpoint = "https://accounts.spotify.com/authorize";

// reirect to the local host once logged in using spotify api
const redirectUri = "http://localhost:3000/callback/";

//client id
const clientId = "d07f88b469a441728b83f12845e5bde5";

// we include scopes - the page will show these things using the spotify api - when we send the user over to the api
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// need to extract the token that is returned to us after user is logged into spotify
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {}); //go to the url and the hash inside it
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true `;

// We log in
// user sent to api auth spotify
// user logs in and is redirected to local host
// the url that is returned contains the access token
// we extract the access token
// we need to use it now in app.js which is where we render the log in component
// so we need to run a peace of code when app runs and then re run it - we use useEffect with a dependency
