import Api from "../../api/api";
import "./index.css";

type Props = {
	albumId: number;
};

const Album = async ({ albumId }: Props) => {
	const data = await Api.getPhotos(albumId);

	return (
		<div className="album-container">
			{data.map((photo) => (
				<div className="photo-container" key={photo.id}>
					<img
						src={photo.url}
						className="photo-img"
						alt={photo.title}
					/>
				</div>
			))}
		</div>
	);
};

export default Album;