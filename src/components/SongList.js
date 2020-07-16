import React from "react";
import SongRow from "./SongRow";

const SongList = (props) => {
  const songRows = props.songs.map((song) => (
    <SongRow key={song.title} song={song} deleteSong={props.deleteSong} />
  ));

  return (
    <table cellSpacing="0">
      <tbody>{songRows}</tbody>
    </table>
  );
};
export default SongList;
