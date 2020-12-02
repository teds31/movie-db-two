import './App.css';
import PropTypes from 'prop-types';
import Counter from './components/Counter';
import Accordion from './components/Accordion';
import Input from './components/Input';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h3>Form input as a controlled component not allowing "t" to be typed</h3>
				<Input />
				<hr />
				<hr />
				<h3>Accordion with state hook and conditional rendering</h3>
				<Accordion />
				<hr />
				<hr />
				<h3>Counter practicing state management with state hook</h3>
				<Counter />
				<h3>Hello world function with default props</h3>
				<HelloWorld />
			</header>
		</div>
	);
}

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

export default App;
