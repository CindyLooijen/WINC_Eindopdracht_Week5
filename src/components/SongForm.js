import React from "react";
import { useForm } from "react-hook-form";

const SongForm = (props) => {
  const { register, handleSubmit } = useForm();

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
          <option value="Latin">Latin</option>
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
    </div>
  );
};
export default SongForm;
