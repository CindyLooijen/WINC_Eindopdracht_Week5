import React from "react";
import SongRow from "./SongRow";

const SongList = (props) => {
  const songRows = props.songs.map((song) => (
    <SongRow
      key={song.title}
      value={song.genre}
      song={song}
      deleteSong={props.deleteSong}
    />
  ));

  const rockGenre = songRows.filter((item) => item.props.value === "Rock");
  const popGenre = songRows.filter((item) => item.props.value === "Pop");
  const latinGenre = songRows.filter((item) => item.props.value === "Latin");

  return (
    <table cellSpacing="0">
      <tbody>
        <tr className="rock-row">
          {rockGenre.length > 0 ? <th colSpan="4">Rock</th> : <th></th>}
        </tr>
        {rockGenre}
        <tr className="pop-row">
          {popGenre.length > 0 ? <th colSpan="4">Pop</th> : <th></th>}
        </tr>
        {popGenre}
        <tr className="latin-row">
          {latinGenre.length > 0 ? <th colSpan="4">Latin</th> : <th></th>}
        </tr>
        {latinGenre}
      </tbody>
    </table>
  );
};
export default SongList;
