import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Link from "next/link";
import "./index.css";

type Props = {
	children: React.ReactNode;
};

const items = [
	{
		key: "0",
		label: <Link href="/">Home</Link>,
	},
	{
		key: "1",
		label: <Link href="/posts">Posts</Link>,
	},
	{
		key: "2",
		label: <Link href="/albums">Albums</Link>,
	},
	{
		key: "3",
		label: <Link href="/todos">Todos</Link>,
	},
];

const CustomLayout = ({ children }: Props) => {
	return (
		<Layout className="layout">
			<Header className="header">
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["0"]}
					items={items}
					style={{ flex: 1, minWidth: 0 }}
				/>
			</Header>

			<Content className="content">
				{children}
			</Content>

			<Footer className="footer">
				Footer
			</Footer>
		</Layout>
	);
};

export default CustomLayout;