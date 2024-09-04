import Spotified from "spotified";

const spotifyApi = new Spotified({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

spotifyApi.auth.ClientCredentials.requestAccessToken().then(
  (data) => spotifyApi.setBearerToken(data.access_token),
  (err) => console.error(err)
);

export const searchSongs = async (query: string) => {
  const data = await spotifyApi.search.searchForItem(query, ["track"]);
  return data.tracks?.items;
};
