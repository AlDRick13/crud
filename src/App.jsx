import HeroCard from "./components/HeroCard";
import CreateModal from "./components/CreateModal";
import "./App.css";
import { useState, useEffect } from "react";

import useApi from "./useApi";
function App() {
  const { heroList, fetchHeroes } = useApi();

  return (
    <div className="justify-center w-full h-screen gap-12 p-12 overflow-hidden overflow-y-scroll bg-black">
      <div className="text-3xl font-bold tracking-widest text-center text-transparent md:text-4xl lg:text-7xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        SuperHeroes CRUD
      </div>
      <CreateModal></CreateModal>
      <div className="flex justify-center">
        <div className="grid justify-around grid-cols-1 gap-12 lg:grid-cols-3 md:grid-cols-2 ">
          {heroList?.map((hero) => (
            <HeroCard
              key={hero.id}
              name={hero.name}
              imageUrl={hero.imageUrl}
              firstName={hero.firstName}
              lastName={hero.lastName}
              place={hero.place}
              id={hero.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
