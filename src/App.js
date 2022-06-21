import React, {useState} from 'react';
import s from './App.module.scss';
import {Link, Route, Routes} from "react-router-dom";
import MainScreen from "./screens/mainScreen/mainScreen";
import SideBar from "./components/sideBar/sideBar";
import Logo from "./components/logo/logo";


function App() {
  const [movieList, setMovieList] = useState([])

  const getMovieList = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0575eac7d0a89edcf83d5418ad2aebed&language=uk')
      .then((response) => response.json())
      .then((response) => {
        setMovieList(response);
      });
  }

  return (
    <div>
      <SideBar/>
      <Routes>
        <Route path="/" element={ <MainScreen /> }/>
      </Routes>
    </div>
  );
}

export default App;
