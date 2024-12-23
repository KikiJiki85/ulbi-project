import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to="/">Main page</Link>
      <Link to="/about">About page</Link>
      <button onClick={toggleTheme}>Change Theme</button>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="about" element={<AboutPage />} />
          <Route index element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
