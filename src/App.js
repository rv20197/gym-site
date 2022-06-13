import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ExerciseDetail from './pages/ExerciseDetail/ExerciseDetail';

import './App.css';

function App() {
	return (
		<Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/exercise/:id' element={<ExerciseDetail />} />
			</Routes>
		</Box>
	);
}

export default App;
