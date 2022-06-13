import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar';
import Loader from '../Loader/Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
	return (
		<Box sx={{ mt: { lg: '6.25rem', xs: '2.5rem' } }}>
			{targetMuscleExercises.length && equipmentExercises.length ? (
				<>
					<Typography variant='h3' mb='1rem'>
						Exercises that target same muscle group
					</Typography>
					<Stack direction='row' sx={{ p: '0.125rem', position: 'relative' }}>
						<HorizontalScrollbar data={targetMuscleExercises} />
					</Stack>

					<Typography variant='h3' mb='1rem'>
						Exercises that use same equipment
					</Typography>
					<Stack direction='row' sx={{ p: '0.125rem', position: 'relative' }}>
						<HorizontalScrollbar data={equipmentExercises} />
					</Stack>
				</>
			) : (
				<Loader />
			)}
		</Box>
	);
};

export default SimilarExercises;
