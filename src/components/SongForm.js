import React from "react";
import { useForm } from "react-hook-form";

const SongForm = (props) => {
  const { register, handleSubmit } = useForm(); // initialise the hook

  return (
    <div>
      <form onSubmit={handleSubmit(props.addSong)}>
        <input name="title" ref={register} placeholder="Title" />
        <input name="artist" ref={register} placeholder="Artist" />
        <select name="genre" ref={register} defaultValue="">
          <option value="" disabled hidden>
            Select Genre
          </option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
        </select>
        <select name="rating" ref={register} defaultValue="">
          <option value="" disabled hidden>
            Select rating
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button>Add song</button>
      </form>
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
export default SongForm;
