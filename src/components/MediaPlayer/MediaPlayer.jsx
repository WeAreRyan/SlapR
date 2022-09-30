import "./MediaPlayer.css"
import PlayerControls from "../PlayerControls/PlayerControls"
import PlayerDetails from "../PlayerDetails/PlayerDetails"

export default function MediaPlayer({ song, nextSong }) {
    return (
        <>
        <div className="c-mediaPlayer">
            <audio></audio>
            <h4>Playing Now</h4>
            <PlayerDetails song={song} nextSong={nextSong} />
            <PlayerControls song={song} nextSong={nextSong} />
            <p><strong>Next: </strong>{nextSong.title} by {nextSong.artist} </p>

        </div>
        </>
    )
}