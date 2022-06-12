import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../../utils/fetchData';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const exercisesPerPage = 9;

	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

	const currentExercises = exercises.slice(
		indexOfFirstExercise,
		indexOfLastExercise
	);

	const paginate = (e, value) => {
		setCurrentPage(value);
		window.scrollTo({ top: 1800, behavior: 'smooth' });
	};

	useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = [];

			if (bodyPart === 'all') {
				const url = 'https://exercisedb.p.rapidapi.com/exercises';
				exercisesData = await fetchData(url, exerciseOptions);
			} else {
				const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
				exercisesData = await fetchData(url, exerciseOptions);
			}
			setExercises(exercisesData);
		};
		fetchExercisesData();
	}, [bodyPart]);

	return (
		<Box
			id='exercises'
			sx={{
				mt: { lg: '6.875rem' }
			}}
			mt='3.125rem'
			p='1.25rem'>
			<Typography variant='h3' mb='2.875rem'>
				Showing Result
			</Typography>
			<Stack
				direction='row'
				sx={{
					gap: { lg: '6.875rem', xs: '3.125rem' }
				}}
				flexWrap='wrap'
				justifyContent='center'>
				{currentExercises.map((exercise, index) => (
					<ExerciseCard key={index} exercise={exercise}></ExerciseCard>
				))}
			</Stack>
			<Stack mt='6.25rem' alignItems='center'>
				{exercises.length > 9 && (
					<Pagination
						color='standard'
						shape='rounded'
						defaultPage={1}
						count={Math.ceil(exercises.length / exercisesPerPage)}
						page={currentPage}
						onChange={paginate}
						size='large'
					/>
				)}
			</Stack>
		</Box>
	);
};

export default Exercises;
