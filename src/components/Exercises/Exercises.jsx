import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../../utils/fetchData';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
	console.log(exercises);
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
				{exercises.map((exercise, index) => (
					<ExerciseCard key={index} exercise={exercise}></ExerciseCard>
				))}
			</Stack>
		</Box>
	);
};

export default Exercises;
