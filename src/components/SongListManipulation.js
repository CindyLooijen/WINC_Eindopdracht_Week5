import React from "react";

const SongListManipulation = (props) => {
  return (
    <div className="song-list-manipulation">
      <select
        name="sortSongList"
        className="sort-songlist"
        defaultValue="sort"
        onChange={(event) => props.filterSortingMethod(event.target.value)}
      >
        <option value="sort" disabled hidden>
          Sort the songlist
        </option>
        <option value="title-AZ">Sort title A-Z</option>
        <option value="title-ZA">Sort title Z-A</option>
        <option value="artist-AZ">Sort artist A-Z</option>
        <option value="artist-ZA">Sort artist Z-A</option>
        <option value="rating-AZ">Sort rating 1-5</option>
        <option value="rating-ZA">Sort artist 5-1</option>
      </select>
      <button
        className="delete-songlist"
        onClick={() => props.deleteSongList()}
      >
        Delete songlist
      </button>
      <div className="filteren-checkbox">
        <input
          type="checkbox"
          className="checkbox"
          value="Rock"
          checked={props.filters.Rock}
          onChange={(event) =>
            props.filterSongs(event.target.value, event.target.checked)
          }
        ></input>
        <label className="filteren">Filter Rock</label>
        <label className="filteren">
          <input
            type="checkbox"
            className="checkbox"
            value="Pop"
            checked={props.filters.Pop}
            onChange={(event) =>
              props.filterSongs(event.target.value, event.target.checked)
            }
          ></input>
          Filter Pop
        </label>
        <label className="filteren">
          <input
            type="checkbox"
            className="checkbox"
            value="Latin"
            checked={props.filters.Latin}
            onChange={(event) =>
              props.filterSongs(event.target.value, event.target.checked)
            }
          ></input>
          Filter Latin
        </label>
      </div>
    </div>
  );
};

export default SongListManipulation;
