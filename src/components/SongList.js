import React from "react";
import SongRow from "./SongRow";

const SongList = (props) => {
  const songRows = props.songs.map((song) => (
    <SongRow key={song.title} song={song} />
  ));

  return (
    <table cellSpacing="0">
      <tbody>{songRows}</tbody>
    </table>
  );
};
export default SongList;
