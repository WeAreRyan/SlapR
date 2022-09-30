import "./PlayerDetails.css";

export default function PlayerDetails({ song, nextSong }) {
  return (
    <>
      <div className="c-details">
        <div className="details-img">
          <img className="details-img" src={song.img_src} alt="" />
        </div>
        <h3 className="details-title">{song.title}</h3>
        <h4 className="details-artist">{song.artist}</h4>
      </div>
    </>
  );
}