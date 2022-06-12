import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Stack, Typography } from '@mui/material';
import styles from './ExerciseVideos.module.css';

const ExerciseVideos = ({ exerciseVideos, exerciseName }) => {
	return (
		<Box sx={{ marginTop: { lg: '12.5rem', xs: '1.25rem' } }} p='1.25rem'>
			<Typography variant='h4' mb='2.0625rem'>
				Watch <span className={styles['exerciseName']}>{exerciseName}</span>{' '}
				exercise videos
			</Typography>
			<Stack
				justifyContent='flex-start'
				flexWrap='wrap'
				alignItems='center'
				sx={{
					flexDirection: { lg: 'row' },
					gap: { lg: '6.875rem', xs: '2.5rem' }
				}}>
				{exerciseVideos?.slice(0, 6).map((item, index) => (
					// <a key={index} className={styles['exercise-video']}></a>
					<>
						<ReactPlayer
							key={index}
							url={`https://www.youtube.com/watch?v=${item.video.videoId}`}
							controls
						/>
					</>
				))}
			</Stack>
		</Box>
	);
};

export default ExerciseVideos;
