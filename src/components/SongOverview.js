import React, { useState } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import SongListManipulation from "./SongListManipulation";

function SongOverview() {
  const [songs, setStateSongs] = useState([]);

  const addSong = (newSongObject) => {
    if (
      newSongObject.title !== "" &&
      newSongObject.artist !== "" &&
      newSongObject.genre !== "" &&
      newSongObject.rating !== ""
    ) {
      setStateSongs([...songs, newSongObject]);
    } else {
      alert("Please fill in all of the fields");
    }
    const inputFields = document.getElementsByTagName("input");
    let index;
    for (index = 0; index < inputFields.length; index++) {
      inputFields[index].value = "";
    }
    const selectFields = document.getElementsByTagName("select");
    for (index = 0; index < selectFields.length; index++) {
      selectFields[index].selectedIndex = 0;
    }
  };

  const sortTitle = (filterChoice, direction) => {
    const copyOfSongs = songs.slice(0);
    if (direction === "AZ") {
      const sortedSongs = copyOfSongs.sort((a, b) =>
        a[filterChoice] > b[filterChoice] ? 1 : -1
      );
      setStateSongs(sortedSongs);
    } else if (direction === "ZA") {
      const sortedSongs = copyOfSongs.sort((a, b) =>
        a[filterChoice] < b[filterChoice] ? 1 : -1
      );
      setStateSongs(sortedSongs);
    }
  };

  const filterSortingMethod = (chosenFilter) => {
    switch (chosenFilter) {
      case "title-AZ":
        sortTitle("title", "AZ");
        break;
      case "title-ZA":
        sortTitle("title", "ZA");
        break;
      case "artist-AZ":
        sortTitle("artist", "AZ");
        break;
      case "artist-ZA":
        sortTitle("artist", "ZA");
        break;
      case "rating-AZ":
        sortTitle("rating", "AZ");
        break;
      case "rating-ZA":
        sortTitle("rating", "ZA");
        break;
      default:
        setStateSongs(songs);
    }
  };

  const deleteSong = (song) => {
    setStateSongs(songs.filter((remainingSongs) => remainingSongs !== song));
  };

  const deleteSongList = () => {
    setStateSongs([]);
  };

  return (
    <div>
      <h1>React Lil Playlist</h1>
      <SongForm addSong={addSong} />
      <SongListManipulation
        deleteSongList={deleteSongList}
        filterSortingMethod={filterSortingMethod}
      />
      <table cellSpacing="0" className="table-songlist-header">
        <tbody>
          <tr className="songList-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </tbody>
      </table>
      <SongList songs={songs} deleteSong={deleteSong} />
    </div>
  );
}
export default SongOverview;
