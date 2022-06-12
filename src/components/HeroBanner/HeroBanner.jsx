import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../../assets/images/banner.png';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
	return (
		<Box
			sx={{
				mt: { lg: '13.25rem', xs: '4.375rem' },
				ml: { sm: '3.125rem' }
			}}
			position='relative'
			p='1.25rem'>
			<Typography color='#FF2625' fontWeight='600' fontSize='1.625rem'>
				Fitness Club
			</Typography>

			<Typography
				fontWeight='700'
				sx={{
					fontSize: { lg: '2.75rem', xs: '2.5rem' }
				}}
				mb='1.4375rem'
				mt='1.875rem'>
				Sweat, Smile <br /> and Repeat
			</Typography>

			<Typography fontSize='1.375rem' lineHeight='2.1875rem' mb={4}>
				Check out the most effective exercises
			</Typography>

			<Button
				variant='contained'
				color='error'
				href='#exercises'
				sx={{ backgroundColor: '#ff2625', padding: '0.625rem' }}>
				Explore Exercises
			</Button>

			<Typography
				fontWeight={600}
				color='#ff2625'
				sx={{
					opacity: 0.1,
					display: { lg: 'block', xs: 'none' }
				}}
				fontSize='12.5rem'>
				Exercise
			</Typography>

			<img
				src={HeroBannerImage}
				alt='Banner'
				className={styles['hero-banner-img']}
			/>
		</Box>
	);
};

export default HeroBanner;
