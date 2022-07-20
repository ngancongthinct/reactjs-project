import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './api/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import NavPage from './NavPage/NavPage';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  //Run code base condition
  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;
    console.log(hash);
    if(_token){
      localStorage.setItem("token",_token);
      setToken(_token);     
      spotify.setAccessToken(_token);
      spotify.getMe().then(user =>{
        console.log(user)
      })
    }
  },[])
  return (
    <div className="App">
      {
        token ? (
          <NavPage/>
        ) : (
          <LoginPage/>
        )
      }
      
    </div>
    
  );
}

export default App;
