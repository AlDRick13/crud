import axios from "axios";
import { HeroApi } from "./endpoints";
import { useState, useEffect } from "react";

const useApi = () => {
  const [heroes, setHeroes] = useState([]);
  const [updateCounter, setUpdateCounter] = useState(0);

  useEffect(() => {
    fetchHeroes();
  }, [updateCounter]); // Se agrega updateCounter como dependencia de useEffect

  const fetchHeroes = async () => {
    try {
      const response = await axios.get(HeroApi);
      setHeroes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setHeroes([]);
    }
  };

  const createHero = async (hero) => {
    try {
      const response = await axios.post(HeroApi, hero);
      setHeroes([...heroes, response.data]);
      setUpdateCounter((prevCounter) => prevCounter + 1); // Se incrementa el contador de actualizaciones
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteHero = async (id) => {
    try {
      await axios.delete(`${HeroApi}/${id}`);
      setHeroes(heroes.filter((hero) => hero.id !== id));
      setUpdateCounter((prevCounter) => prevCounter + 1); // Se incrementa el contador de actualizaciones
    } catch (error) {
      console.error(error);
    }
  };

  const updateHero = async (id, hero) => {
    try {
      const response = await axios.put(`${HeroApi}/${id}`, hero);
      setHeroes(
        heroes.map((h) => (h.id === id ? { ...h, ...response.data } : h))
      );
      setUpdateCounter((prevCounter) => prevCounter + 1); // Se incrementa el contador de actualizaciones
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  let heroList = heroes;

  return {
    heroList,
    updateCounter,
    fetchHeroes,
    createHero,
    deleteHero,
    updateHero,
  };
};

export default useApi;
