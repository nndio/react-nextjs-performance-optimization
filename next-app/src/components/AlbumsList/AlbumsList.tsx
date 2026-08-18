import { Flex } from "antd";
import Api from "../../api/api";
import Album from "../Album/Album";

const AlbumsList = async () => {
	const data = await Api.getAlbums();

	return (
		<Flex wrap="wrap" gap="middle" justify="center">
			{data.map((album) => (
				<Album key={album.id} albumId={album.id} />
			))}
		</Flex>
	);
};

export default AlbumsList;