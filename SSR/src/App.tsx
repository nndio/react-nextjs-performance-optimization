import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import CusomLayout from "./components/Layout/Layout";

const AlbumsPage = lazy(() => import("./pages/AlbumsPage/AlbumsPage"));
const PostsPage = lazy(() => import("./pages/PostsPage/PostsPage"));
const TodoPage = lazy(() => import("./pages/TodoPage/TodoPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<CusomLayout />}>
						<Route index path="" element={<HomePage />} />
						<Route path="posts" element={<PostsPage />} />
						<Route path="albums" element={<AlbumsPage />} />
						<Route path="todos" element={<TodoPage />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;