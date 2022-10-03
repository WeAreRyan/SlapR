import "./App.css";
import { useState, useEffect } from "react";
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
      title: "Redemption", 
      artist: "Max Brhon", 
      img_src: "./images/MaxBrhon-Redemption.png", 
      src: "./music/MaxBrhon-Redemption.mp3"
    }, 
    {
      title: "Tonight", 
      artist: "Facading", 
      img_src: "./images/Facading-Tonight.png", 
      src: "./music/Facading-Tonight.mp3"
    }, 
    {
      title: "Out Of Here", 
      artist: "borne", 
      img_src: "./images/borne-OutOfHere.png", 
      src: "./music/borne-OutOfHere.mp3"
    }, 
    {
      title: "Ricochet", 
      artist: "Rob Gasser", 
      img_src: "./images/RobGasser-Ricochet.png", 
      src: "./music/RobGasser-Ricochet.mp3"
    }, 
  ])

  useEffect(() => {
      setNextSongIndex(() => {
        if (currentSongIndex + 1 > songs.length -1) {
          return 0;
        } else {
          return currentSongIndex + 1;
        }
      });
  }, [currentSongIndex])

  return (
    <main className="App">
      <MediaPlayer 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
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
