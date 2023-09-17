import { Card, CardBody, Image } from "@nextui-org/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SearchCardSmall({ movie }) {
	const navigate = useNavigate();

	const handleClick = (id) => {
		navigate(`/${movie.id}`);
	};

	return (
		<Link to={`/${movie.id}`}>
			<Card
				isBlurred
				// isPressable
				// onPress={() => handleClick(movie.id)}
				className="border-none bg-background/60 dark:bg-default-100/50 p-2 mb-2 w-full"
				shadow="sm"
			>
				<CardBody className="p-0">
					<div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
						<div className="relative flex justify-center col-span-6 md:col-span-4">
							<img
								alt="Album cover"
								className="object-cover h-12"
								// shadow="md"
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								// width="100%"
							/>
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
