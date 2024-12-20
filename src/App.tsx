import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense, useContext, useState } from 'react';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to="/">Main page</Link>
      <Link to="/about">About page</Link>
      <button onClick={toggleTheme}>Change Theme</button>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="about" element={<AboutPageAsync />} />
          <Route index element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
