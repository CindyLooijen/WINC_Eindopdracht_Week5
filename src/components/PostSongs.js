const postSongs = async (song) => {
  try {
    const resultPOST = await fetch(
      "https://winc-lil-playlist-b1cd4.firebaseio.com/playlist.json",
      {
        method: "POST",
        body: JSON.stringify(song),
      }
    );
    const songKey = resultPOST.json();
    return songKey.name;
  } catch {
    console.log("Sorry het versturen van de data is niet gelukt");
  }
};

export default postSongs;
