import { useState, useEffect } from "react";

export const useFetch = (apiPath) => {
  
  const [data, setData] =useState([]);
  
  // const url= "https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=346090a8aed7fc9280b4eab757457855`;

  useEffect(()=>{
    async function fetchMovies(){
      const response= await fetch(url);
      const JSN= await response.json();
      setData(JSN.results);
    }
    fetchMovies();
  },[url])

  return  { data }
}
