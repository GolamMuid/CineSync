import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSearch = (search: string) => {
	const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;

	return useQuery(["todos", { search }], async () => {
		if (search.length > 0) {
			const response = await axios.get(url, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_MY_TOKEN}`,
				},
			});
			return response.data;
		}
	});
};
