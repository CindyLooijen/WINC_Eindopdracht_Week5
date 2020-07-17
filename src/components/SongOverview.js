import React, { useState } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

function SongOverview() {
  const [songs, setStateSongs] = useState([
    {
      title: "Closer",
      artist: "Kings of Leon",
      genre: "Rock",
      rating: "4",
    },
    {
      title: "Animals",
      artist: "Maroon 5",
      genre: "Pop",
      rating: "5",
    },
    {
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

  return (
    <div>
      <SongForm addSong={addSong} filterSortingMethod={filterSortingMethod} />
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
      <SongList songs={songs} />
    </div>
  );
}
export default SongOverview;
