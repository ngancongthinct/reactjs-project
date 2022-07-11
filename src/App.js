import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu'
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import CollectionPage from './pages/CollectionPage/CollectionPage';

function App() {
  return (
    <div className="App">
      <nav>
      <Menu/>
      </nav>

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="collection/playlists" element={<CollectionPage />} />
      </Routes>
    </div>
    
  );
}

export default App;
