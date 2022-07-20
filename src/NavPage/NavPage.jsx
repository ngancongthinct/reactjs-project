import React from "react";
import PropTypes from "prop-types";
import Menu from "../components/Menu/Menu";
import HomePage from "../pages/HomePage/HomePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import CollectionPage from "../pages/CollectionPage/CollectionPage";
import { Routes, Route, Link } from "react-router-dom";
import './NavPage.scss'
import PlaylistPage from "../pages/PlaylistPage/PlaylistPage";

NavPage.propTypes = {};

function NavPage(props) {
  return (
    <div className='flex'>
      <nav>
        <Menu/>
      </nav>

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="collection/playlists" element={<CollectionPage />} />
        <Route path="/collection/tracks" element={<PlaylistPage />} />
        
      </Routes>
    </div>
  );
}

export default NavPage;
