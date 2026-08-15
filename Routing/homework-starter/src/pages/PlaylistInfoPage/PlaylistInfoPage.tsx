import { Link, useParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import "./PlaylistInfoPage.css";

export function PlaylistInfoPage() {
    const { playlistId } = useParams();

    const playlist = PLAYLISTS.find(
        (playlist) => playlist.id === Number(playlistId)
    );

    if (!playlist || playlist.songs.length === 0) {
        return (
            <div className="playlistInfoPage">
                <h2>PlaylistInfoPage</h2>

                <div className="playlists">
                    <p>такого плейлиста нет</p>
                </div>
            </div>
        );
    }

    return (
        <div className="playlistInfoPage">
            <p>
                Жанр:{" "}
                <Link to={`/playlists?searchGenre=${playlist.genre.toLowerCase()}`}>
                    {playlist.genre}
                </Link>
            </p>

            <h2>Название: {playlist.name}</h2>

            <ul className="songs">
                {playlist.songs.map((song, index) => (
                    <li key={`${song}-${index}`}>{song}</li>
                ))}
            </ul>
        </div>
    );
}