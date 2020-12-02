import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Accordion from './Accordion';
import Input from './Input';
const Practice = () => {
	return (
		<div>
			{' '}
			<h3>Form input as a controlled component not allowing "t" to be typed</h3>
			<Input />
			<hr />
			<h3>Accordion with state hook and conditional rendering</h3>
			<Accordion />
			<hr />
			<h3>Counter practicing state management with state hook</h3>
			<Counter />
			<hr />
			<h3>Hello world function with default props</h3>
			<HelloWorld />
		</div>
	);
};
function HelloWorld({ name = 'World', greeting = 'What Up' }) {
	return (
		<>
			<h1>
				{greeting} {name}
			</h1>
		</>
	);
}

HelloWorld.propTypes = {
	name: PropTypes.string,
	greeting: PropTypes.string,
};

export default Practice;
