import "./MediaPlayer.css"
import { useState, userEffect, useRef } from "react"
import PlayerControls from "../PlayerControls/PlayerControls"
import PlayerDetails from "../PlayerDetails/PlayerDetails"
import { useEffect } from "react";

export default function MediaPlayer({ currentSongIndex, setCurrentSongIndex, nextSongIndex, songs }) {

    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const skipSong = (forwards = true) => {
        if (forwards) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp++;

                if (temp > songs.length -1) {
                    temp = 0;
                }
                return temp;
            })
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = songs.length - 1;
                }
                return temp;
            })
        }
    }

    return (
        <>
        <div className="c-mediaPlayer">
            <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
            <h4>Playing Now</h4>
            <PlayerDetails song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
            <PlayerControls 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} 
                songs={songs[currentSongIndex]} 
                nextSong={songs[nextSongIndex]} 
                skipSong={skipSong}
                />
            <p><strong>Next: </strong>{songs[nextSongIndex].title} by {songs[nextSongIndex].artist} </p>

        </div>
        </>
    )
}