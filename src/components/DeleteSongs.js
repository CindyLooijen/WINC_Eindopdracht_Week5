const DeleteSong = async (songKey) => {
  await fetch(
    `https://winc-lil-playlist-b1cd4.firebaseio.com/playlist/${songKey}.json`,
    {
      method: "delete",
    }
  );
};
export default DeleteSong;
