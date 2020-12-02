import React, { useState } from 'react';

const Accordion = () => {
	const [isToggled, setIsToggled] = useState(false);
	const showMe = isToggled ? <h3>Show Me</h3> : null;
	return (
		<div>
			{showMe}
			<button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
		</div>
	);
};

export default Accordion;
