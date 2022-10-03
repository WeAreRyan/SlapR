import "./PlayerControls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

export default function PlayerControls({ song, nextSong, isPlaying, setIsPlaying, skipSong }) {
  return (
    <>
      <div className="c-playerControls">
        <button className="skip-btn" onClick= {() => skipSong(false)}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className={isPlaying ? "pause-btn" : "play-btn"} onClick={() => setIsPlaying(!isPlaying)}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <button className="skip-btn" onClick= {() => skipSong()}>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
    </>
  );
}
