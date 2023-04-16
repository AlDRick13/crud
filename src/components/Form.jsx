import React, { useState, useEffect } from "react";
import useApi from "../useApi";
const Form = ({ handleClose }) => {
  const { createHero, fetchHeroes } = useApi();

  const [state, setState] = useState({
    name: "",
    firstName: "",
    lastName: "",
    place: "",
    imageUrl: "",
  });

  const handlePost = () => {
    createHero(state);
    fetchHeroes();
    handleClose();
  };
  const handleChange = (event) => {
    setState((prev) => {
      const target = event.target;
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };
  return (
    <div
      className={`grid rounded-lg w-[350px] p-5 bg-gray-600   grid-rows-4 gap-3`}
    >
      <label className="w-full text-white ">
        Hero Name:
        <input
          value={state.name}
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          className="w-full p-1 text-black rounded-full"
        />
      </label>
      <label className="w-full text-white ">
        First Name:
        <input
          value={state.firstName}
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          className="w-full p-1 text-black rounded-full"
        />
      </label>
      <label className="w-full text-white ">
        Last Name:
        <input
          value={state.lastName}
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          className="w-full p-1 text-black rounded-full"
        />
      </label>
      <label className="w-full text-white ">
        Place:
        <input
          value={state.place}
          type="text"
          id="place"
          name="place"
          onChange={handleChange}
          className="w-full p-1 text-black rounded-full"
        />
      </label>
      <label className="w-full text-white ">
        Image url:
        <input
          value={state.imageUrl}
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={handleChange}
          className="w-full p-1 text-black rounded-full"
        />
      </label>

      <div className="flex justify-around">
        <button
          onClick={handleClose}
          className="w-2/6 p-3 font-bold text-white rounded-full bg-gradient-to-r from-black to-red-500 hover:from-black hover:to-red-900"
        >
          Cancel
        </button>
        <button
          onClick={handlePost}
          className="w-2/6 p-3 font-bold text-white rounded-full bg-gradient-to-r from-orange-500 to-emerald-500 hover:from-orange-900 hover:to-emerald-900"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Form;
