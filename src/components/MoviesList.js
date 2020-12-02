import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import Movie from './Movie';

const API_URL =
	'https://api.themoviedb.org/3/discover/movie?api_key=3a8602f2cbe5d21d94d230c47c07a4ed';
const MoviesList = () => {
	const [filter, setFilter] = useState('');
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		try {
			const res = await fetch(API_URL);
			const movies = await res.json();
			setMovies(movies.results);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		getMovies();
	}, [filter]);
	return (
		<div>
			<Filter filter={filter} setFilter={setFilter} />
			<ul>
				{movies
					.filter((movie) => {
						return movie.title.toLowerCase().includes(filter.toLowerCase());
					})
					.map((movie) => {
						return <Movie key={movie.id} movie={movie} />;
					})}
			</ul>
		</div>
	);
};

export default MoviesList;
