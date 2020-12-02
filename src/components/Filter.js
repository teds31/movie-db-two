import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, setFilter }) => {
	return (
		<div>
			{' '}
			<label htmlFor='search'>
				Search Filter:
				<input
					type='text'
					name='search'
					onChange={(e) => setFilter(e.target.value)}
					value={filter}
				/>
			</label>
		</div>
	);
};

Filter.propTypes = {
	filter: PropTypes.string.isRequired,
	setFilter: PropTypes.func.isRequired,
};

export default Filter;
