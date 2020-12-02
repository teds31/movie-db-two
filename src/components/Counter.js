import React, { useState } from 'react';

const Counter = () => {
	const [state, setState] = useState(0);
	// const addCount = () => {
	// 	setState(state++);
	// };
	return (
		<div>
			<h3>{state}</h3>
			<button onClick={() => setState(state + 1)}>+</button>
			<button onClick={() => setState(state - 1)}>-</button>
		</div>
	);
};

export default Counter;
