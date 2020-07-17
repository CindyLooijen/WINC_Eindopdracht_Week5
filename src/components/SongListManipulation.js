import React from "react";

const SongListManipulation = (props) => {
  return (
    <div>
      <select
        name="sortSongList"
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
      <button onClick={() => props.deleteSongList()}>Delete songlist</button>
    </div>
  );
};

export default SongListManipulation;
