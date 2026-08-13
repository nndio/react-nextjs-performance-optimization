import "./PlaylistsPage.css";
import { Link } from "react-router-dom";
import { PLAYLISTS } from "../../data";

export function PlaylistsPage() {
    
    return (
        <div className="playlistsPage">
            <h2>PlaylistsPage</h2>

            <div className="playlists">

                {PLAYLISTS.map(({ id, name }) => (
                    <Link to={`/playlists/${id}`} key={id}>
                        {name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
