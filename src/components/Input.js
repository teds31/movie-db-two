import React, { useState } from 'react';

const Input = () => {
	const [state, setState] = useState('');
	return (
		<div>
			<input
				type='text'
				onChange={(e) => {
					if (!e.target.value.includes('t')) setState(e.target.value);
				}}
				value={state}
			/>
			<h2>{state}</h2>
		</div>
	);
};

export default Input;
