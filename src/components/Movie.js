import React from 'react';

const Movie = ({ movie }) => {
	return (
		<div>
			<li>{movie.title}</li>
		</div>
	);
};

export default Movie;
