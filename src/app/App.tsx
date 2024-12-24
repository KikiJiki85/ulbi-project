import { Link } from 'react-router-dom';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change Theme</button>
      <Link to="/">Main page</Link>
      <Link to="/about">About page</Link>
      <AppRouter />
    </div>
  );
}

export default App;
