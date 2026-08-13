import "./PlaylistsPage.css";
import { Link, useSearchParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import { ChangeEvent } from "react";

export function PlaylistsPage() {
    
    const [searchParam, setSearchParam] = useSearchParams();
    
    const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;

        setSearchParam((params) => {
            params.set("searchName", value.toLowerCase());
            return params;
        });
    };

    const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;

        setSearchParam((params) => {
            params.set("searchGenre", value.toLowerCase());
            return params;
        });
    };

    const searchName = searchParam.get("searchName") || "";

    const searchGenre = searchParam.get("searchGenre") || "";

    const filteredPlaylists = PLAYLISTS.filter(({ name, genre }) => {
		const matchesName = name.toLowerCase().includes(searchName);
		const matchesGenre = genre.toLowerCase().includes(searchGenre);

		return matchesName && matchesGenre;
	});

    return (
        <div className="playlistsPage">
            <h2>PlaylistsPage</h2>

            <div className="playlists">
                <label>
					введите жанр{" "}
					<input type="text" value={searchGenre} onChange={handleSearchGenre} />
				</label>
                <label>
					введите название{" "}
					<input type="text" value={searchName} onChange={handleSearchName} />
				</label>

                {filteredPlaylists.map(({ id, name }) => (
					<Link to={`/playlists/${id}`} key={id}>
						{name}
					</Link>
				))}
            </div>
        </div>
    );
}
