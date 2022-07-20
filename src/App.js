import { React, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainScreen from './screens/mainScreen/mainScreen';
import SideBar from './components/sideBar/sideBar';
import Profile from './screens/profileScreen/profile';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const getMovieList = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0575eac7d0a89edcf83d5418ad2aebed&language=uk')
      .then((response) => response.json())
      .then((response) => {
        setMovieList(response.results);
      });
  };

  useEffect(() => {
    getMovieList();
  }, []);

  const getModalState = (func) => {
    setIsSideBarOpen(func);
  };

  console.log(1);

  return (
    <div>
      <SideBar getModalState={getModalState} />
      <Routes>
        <Route path="/" element={<MainScreen movieList={movieList} isSideBarOpen={isSideBarOpen} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
