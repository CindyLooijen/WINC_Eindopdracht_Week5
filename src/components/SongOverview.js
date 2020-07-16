import React, { useState } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

function SongOverview() {
  const [songs, setStateSongs] = useState([
    {
      //id: 1,
      title: "Closer",
      artist: "Kings of Leon",
      genre: "Rock",
      rating: "4",
    },
    {
      //id: 2,
      title: "Animals",
      artist: "Maroon 5",
      genre: "Pop",
      rating: "5",
    },
    {
      //id: 3,
      title: "Diamant",
      artist: "Nielson",
      genre: "Pop",
      rating: "3",
    },
  ]);

  const addSong = (newSongObject) => {
    //event.preventDefault();
    setStateSongs([...songs, newSongObject]);
    const inputFields = document.getElementsByTagName("input");
    let index;
    for (index = 0; index < inputFields.length; index++) {
      inputFields[index].value = "";
    }
    document.getElementsByTagName("select")[0].selectedIndex = 0;
  };

  return (
    <div>
      <SongForm addSong={addSong} />
      <table>
        <tr className="song-header">
          <th className="song-row__item">Song</th>
          <th className="song-row__item">Artist</th>
          <th className="song-row__item">Genre</th>
          <th className="song-row__item">Rating</th>
        </tr>
      </table>
      <SongList songs={songs} />
    </div>
  );
}
export default SongOverview;
