import "./PlayerControls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

export default function PlayerControls({ song, nextSong }) {
  return (
    <>
      <div className="c-playerControls">
        <button className="skip-btn">
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className="play-btn">
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button className="skip-btn">
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
    </>
  );
}
