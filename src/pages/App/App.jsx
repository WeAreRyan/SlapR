import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import MediaPlayer from "../../components/MediaPlayer/MediaPlayer";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)
  const [songs, setSongs] = useState([
    {
      title: "song1", 
      artist: "artist1", 
      img_src: "./images/song-1.jpeg", 
      src: "./music/SONG1"
    }, 
    {
      title: "song2", 
      artist: "artist2", 
      img_src: "./images/song-2.jpeg", 
      src: "./music/SONG2"
    }, 
    {
      title: "song3", 
      artist: "artist3", 
      img_src: "./images/song-3.jpeg", 
      src: "./music/SONG3"
    }, 
    {
      title: "song4", 
      artist: "artist4", 
      img_src: "./images/song-4.jpeg", 
      src: "./music/SONG4"
    }, 
  ])

  return (
    <main className="App">
      <MediaPlayer 
        song={songs[currentSongIndex]}
        nextSong={songs[nextSongIndex]}
        />



      {/* {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes></Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )} */}
    </main>
  );
}
