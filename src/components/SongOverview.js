import React, { useState, useEffect } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import SongListManipulation from "./SongListManipulation";
import GetSongs from "./GetSongs";
import PostSongs from "./PostSongs";
import DeleteSongs from "./DeleteSongs";

function SongOverview() {
  const [songs, setStateSongs] = useState([]);
  const [filters, setStateFilters] = useState({
    Rock: true,
    Pop: true,
    Latin: true,
  });

  const renderSongsData = async () => {
    const songsFromDatabase = await GetSongs();
    let allSongs = Object.keys(songsFromDatabase).map((key) => ({
      key: key,
      title: songsFromDatabase[key].title,
      artist: songsFromDatabase[key].artist,
      genre: songsFromDatabase[key].genre,
      rating: songsFromDatabase[key].rating,
      display: "include",
    }));
    setStateSongs(allSongs);
  };

  useEffect(() => {
    renderSongsData();
  }, []);

  const addSong = async (newSongObject) => {
    if (
      newSongObject.title !== "" &&
      newSongObject.artist !== "" &&
      newSongObject.genre !== "" &&
      newSongObject.rating !== ""
    ) {
      const songKey = await PostSongs(newSongObject);
      newSongObject.key = songKey;
      setStateSongs([...songs, newSongObject]);
      console.log(songs);
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
    DeleteSongs(song.key);
  };

  const deleteSongList = () => {
    setStateSongs([]);
  };

  const filterSongs = (genre, checked) => {
    const copyOfSongs = songs.slice(0);
    const genreIncluded = copyOfSongs.filter((songs) => songs.genre === genre);
    const genreExcluded = copyOfSongs.filter((songs) => songs.genre !== genre);
    if (checked === true) {
      genreIncluded.forEach((song) => (song.display = "include"));
    } else if (checked === false) {
      genreIncluded.forEach((song) => (song.display = "exclude"));
      setStateFilters({ ...filters, [genre]: true });
    }
    setStateSongs(genreIncluded.concat(genreExcluded));
    setStateFilters({ ...filters, [genre]: checked });
  };

  return (
    <div>
      <h1>React Lil Playlist</h1>
      <SongForm addSong={addSong} />
      <SongListManipulation
        deleteSongList={deleteSongList}
        filterSortingMethod={filterSortingMethod}
        filterSongs={filterSongs}
        filters={filters}
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
      <SongList
        songs={songs}
        deleteSong={deleteSong}
        filterSongs={filterSongs}
      />
    </div>
  );
}
export default SongOverview;
