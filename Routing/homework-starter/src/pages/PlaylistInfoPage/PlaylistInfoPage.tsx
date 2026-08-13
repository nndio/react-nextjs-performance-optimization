import { useParams } from "react-router-dom";
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
            <h2>{playlist.name}</h2>

            <p>{playlist.genre}</p>

            <ul className="songs">
                {playlist.songs.map((song, index) => (
                    <li key={`${song}-${index}`}>{song}</li>
                ))}
            </ul>
        </div>
    );
}