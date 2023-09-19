import { Card, CardBody } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { IMovie } from "../../../types/movie";

function SearchCardSmall({ movie }: { movie: IMovie }) {
	console.log(movie);
	return (
		<Link to={`/${movie.id}`}>
			<Card
				isBlurred
				className="border-none bg-background/60 dark:bg-default-100/50 p-2 mb-2 w-full"
				shadow="sm"
			>
				<CardBody className="p-0">
					<div className="grid grid-cols-2 gap-6">
						<div className="relative flex justify-center">
							{movie.poster_path === null ? (
								<img
									alt="Album cover"
									className="object-cover h-12"
									src={`./no_image.jpg`}
								/>
							) : (
								<img
									alt="Album cover"
									className="object-cover h-12"
									src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								/>
							)}
						</div>

						<div className="flex flex-col col-span-6 md:col-span-8">
							{movie.title}
						</div>
					</div>
				</CardBody>
			</Card>
		</Link>
	);
}

export default SearchCardSmall;
