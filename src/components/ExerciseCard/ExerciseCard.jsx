import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

import styles from './ExerciseCard.module.css';

const ExerciseCard = ({ exercise }) => {
	return (
		<Link to={`/exercise/${exercise.id}`} className={styles['exercise-card']}>
			<img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
			<Stack direction='row'>
				<Button
					sx={{
						ml: '1.3125rem',
						color: '#FFF',
						background: '#ffa9a9',
						fontSize: '0.875rem',
						borderRadius: '1.25rem',
						textTransform: 'capitalize'
					}}>
					{exercise.bodyPart}
				</Button>
				<Button
					sx={{
						ml: '1.3125rem',
						color: '#FFF',
						background: '#fcc757',
						fontSize: '0.875rem',
						borderRadius: '1.25rem',
						textTransform: 'capitalize'
					}}>
					{exercise.target}
				</Button>
			</Stack>
			<Typography
				ml='1.3125rem'
				color='#000'
				fontWeight='bold'
				mt='0.6875rem'
				pb='0.625rem'
				textTransform='capitalize'
				fontSize='1.1rem'>
				{exercise.name}
			</Typography>
		</Link>
	);
};

export default ExerciseCard;
