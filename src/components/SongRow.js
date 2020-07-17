import React from "react";

const SongRow = (props) => {
  return (
    <tr className="songs-row" key={props.song.id}>
      <th className="song-row__item">{props.song.title}</th>
      <th className="song-row__item">{props.song.artist}</th>
      <th className="song-row__item">{props.song.genre}</th>
      <th className="song-row__item">{props.song.rating}</th>
      <th className="song-row__item">
        <button onClick={() => props.deleteSong(props.song)}>Delete</button>
      </th>
    </tr>
  );
};

export default SongRow;
