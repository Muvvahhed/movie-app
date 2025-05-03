export const TMDB_CONFIG = {
	BASE_URL: 'https://api.themoviedb.org/3',
	API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
	HEADERS: {
		Accept: 'application/json',
		Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
	},
}

export const fetchMovies = async ({ query }: { query?: string }) => {
	const endpoint = query
		? `/search/movie?query=${encodeURIComponent(query)}`
		: `/discover/movie?sort_by=popularity.desc`
	const response = await fetch(`${TMDB_CONFIG.BASE_URL}${endpoint}`, {
		method: 'GET',
		headers: TMDB_CONFIG.HEADERS,
	})

	if (!response.ok) {
		//@ts-expect-error
		throw new Error('Failed to fetch movies', response.statusText)
	}

	const data = await response.json()

	return data.results
}

// import { Client, Account } from 'react-native-appwrite';

// const client = new Client()
//     .setEndpoint('https://fra.cloud.appwrite.io/v1')
//     .setProject('68133db50008148389c8')
//     .setPlatform('com.movie.app');

// https://fra.cloud.appwrite.io/v1

// 68133db50008148389c8
