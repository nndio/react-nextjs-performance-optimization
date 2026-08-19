import { Albums, Photos } from "./models";
import { BASE_URL } from "./config";

export const getAlbums = async (): Promise<Albums> => {
	const response = await fetch(`${BASE_URL}/users/1/albums`);

	if (!response.ok) {
		throw new Error("Failed to fetch albums");
	}

	return response.json();
};

export const getPhotos = async (albumId: number): Promise<Photos> => {
	const response = await fetch(`${BASE_URL}/albums/${albumId}/photos`);

	if (!response.ok) {
		throw new Error("Failed to fetch photos");
	}

	return response.json();
};