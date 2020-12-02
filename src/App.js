import './App.css';
// import PropTypes from 'prop-types';
// import Counter from './components/Counter';
// import Accordion from './components/Accordion';
import Input from './components/Input';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				{/* <Accordion /> */}
				<Input />
			</header>
		</div>
	);
}

// function HelloWorld({ name = 'World', greeting = 'What Up' }) {
// 	return (
// 		<>
// 			<h1>
// 				{greeting} {name}
// 			</h1>
// 		</>
// 	);
// }

// HelloWorld.propTypes = {
// 	name: PropTypes.string,
// 	greeting: PropTypes.string,
// };

export default App;
