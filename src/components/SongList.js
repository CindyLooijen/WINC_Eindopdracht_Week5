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
  console.log();

  return (
    <table cellSpacing="0">
      <tbody>
        <tr>
          <th colSpan="4">Rock</th>
        </tr>
        {songRows.filter((item) => item.props.value === "Rock")}
        <tr className="pop-row">
          <th colSpan="4">Pop</th>
        </tr>
        {songRows.filter((item) => item.props.value === "Pop")}
      </tbody>
    </table>
  );
};
export default SongList;
