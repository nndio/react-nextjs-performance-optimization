import { Space } from "antd";
import Post from "../Post/Post";
import Api from "../../api/api";

const PostsList = async () => {
	const data = await Api.getPosts();

	return (
		<Space direction="vertical" size="middle" style={{ display: "flex" }}>
			{data.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</Space>
	);
};

export default PostsList;