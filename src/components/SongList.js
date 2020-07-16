import React from "react";
import SongRow from "./SongRow";

const SongList = (props) => {
  const songRows = props.songs.map((song) => (
    <SongRow /* key={song.id} */ song={song} />
  ));

  return <table>{songRows}</table>;
};
export default SongList;
