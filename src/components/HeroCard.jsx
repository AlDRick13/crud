import React from "react";
import axios from "axios";
import { HeroApi } from "../endpoints";

const HeroCard = ({ name, firstName, lastName, imageUrl, place, id }) => {
  const handleDelete = () => {
    axios
      .delete(`${HeroApi}/${id}`)
      .then((response) => {})
      .catch((error) => {});
  };
  return (
    <div className="text-white p-3 bg-gradient-to-r from-indigo-900 to-green-900 h-[350px] w-[250px] rounded">
      <div
        className="bg-center bg-cover h-1/2"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="text-2xl text-center">{name}</div>
      <div>Name: {firstName}</div>
      <div>Lastname: {lastName}</div>
      <div>Place: {place}</div>
      <div className="flex justify-around">
        <button
          onClick={handleDelete}
          className="w-5/12 p-3 font-bold text-white rounded-full bg-gradient-to-r from-black to-red-500 hover:from-black hover:to-red-900"
        >
          DELETE
        </button>
        <button
          // onClick={handlePost}
          className="w-5/12 p-3 font-bold text-white rounded-full bg-gradient-to-r from-orange-500 to-emerald-500 hover:from-orange-900 hover:to-emerald-900"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
