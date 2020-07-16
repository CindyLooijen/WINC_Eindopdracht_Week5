import React from "react";
import { useForm } from "react-hook-form";

const SongForm = (props) => {
  const { register, handleSubmit } = useForm(); // initialise the hook

  return (
    <form onSubmit={handleSubmit(props.addSong)}>
      <input name="title" ref={register} placeholder="Title" id="input-title" />
      <input
        name="artist"
        ref={register}
        placeholder="Artist"
        id="input-artist"
      />
      <input
        name="genre"
        ref={register}
        placeholder="Genre"
        className="input-field"
      />
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
  );
};
export default SongForm;
