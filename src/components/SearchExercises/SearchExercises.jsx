import React, { useEffect, useState } from 'react';

import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../../utils/fetchData';
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar';

import styles from './SearchExercises.module.css';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
	const [search, setSearch] = useState('');
	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const fetchExercisesData = async () => {
			const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
			const bodyPartsData = await fetchData(url, exerciseOptions);
			setBodyParts(['all', ...bodyPartsData]);
		};
		fetchExercisesData();
	}, []);

	const inputHandler = e => {
		setSearch(e.target.value.toLowerCase());
	};

	const searchHandler = async () => {
		const url = 'https://exercisedb.p.rapidapi.com/exercises';
		if (search) {
			const exercisesData = await fetchData(url, exerciseOptions);
			const searchedExercises = exercisesData.filter(
				exercise =>
					exercise.name.toLowerCase().includes(search) ||
					exercise.target.toLowerCase().includes(search) ||
					exercise.equipment.toLowerCase().includes(search) ||
					exercise.bodyPart.toLowerCase().includes(search)
			);
			setSearch('');
			setExercises(searchedExercises);
		}
	};

	return (
		<Stack
			alignItems='center'
			mt='2.3125rem'
			justifyContent='center'
			padding='1.25rem'>
			<Typography
				fontWeight={700}
				sx={{
					fontSize: { lg: '2.75rem', xs: '1.875rem' },
					mb: '3.125rem',
					textAlign: 'center'
				}}>
				Awesome Exercises You <br />
				Should Know
			</Typography>
			<Box position='relative' mb='4.5rem'>
				<TextField
					sx={{
						input: {
							fontWeight: '700',
							border: 'none',
							borderRadius: '0.25rem'
						},
						width: { lg: '50rem', xs: '21.875rem' },
						backgroundColor: '#fff',
						borderRadius: '2.5rem'
					}}
					height='4.75rem'
					value={search}
					onChange={inputHandler}
					placeholder='Search Exercises'
					type='text'
				/>
				<Button
					className={styles['search-btn']}
					sx={{
						bgcolor: '#FF2625',
						color: '#FFF',
						textTransform: 'none',
						width: { lg: '10.9375rem', xs: '5rem' },
						fontSize: { lg: '1.25rem', xs: '0.875rem' },
						height: '3.5rem',
						position: 'absolute',
						right: '0'
					}}
					onClick={searchHandler}>
					Search
				</Button>
			</Box>
			<Box sx={{ position: 'relative', width: '100%', padding: '1.25rem' }}>
				<HorizontalScrollbar
					data={bodyParts}
					setBodyPart={setBodyPart}
					bodyPart={bodyPart}
					isBodyParts
				/>
			</Box>
		</Stack>
	);
};

export default SearchExercises;
