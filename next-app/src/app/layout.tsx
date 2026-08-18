import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import CustomLayout from "../components/Layout/Layout";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "SSR Next App",
	description: "Next.js application with server components",
};

type Props = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable}`}
		>
			<body>
				<AntdRegistry>
					<CustomLayout>{children}</CustomLayout>
				</AntdRegistry>
			</body>
		</html>
	);
}