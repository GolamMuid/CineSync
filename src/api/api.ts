import axios from "axios";

// ? Get Trending Movies

export const getTrendingMovies = async () => {
	const response = await axios.get(
		`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
		{
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_MY_TOKEN}`,
			},
		}
	);
	return response.data;
};

// ? Get Top Rated Movies

export const getTopRatedMovies = async () => {
	const response = await axios.get(
		`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
		{
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_MY_TOKEN}`,
			},
		}
	);
	return response.data;
};

// ? Get Searched Movies

// export const getSearchedMovies = async (searchTerm: string) => {
// 	console.log(searchTerm);

// 	if (searchTerm.length > 0) {
// 		const response = await axios.get(
// 			`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`,
// 			{
// 				headers: {
// 					Authorization: `Bearer ${import.meta.env.VITE_MY_TOKEN}`,
// 				},
// 			}
// 		);
// 		return response;
// 	}
// };
