import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../../assets/images/gym-1.png';
import styles from './Footer.module.css';

const Footer = () => (
	<Box mt='80px' bgcolor='#FFF3F4'>
		<Stack
			gap='40px'
			sx={{ alignItems: 'center' }}
			flexWrap='wrap'
			px='40px'
			pt='24px'>
			<img src={Logo} alt='logo' style={{ width: '200px', height: '80px' }} />
		</Stack>
		<Typography
			variant='h5'
			sx={{ fontSize: { lg: '28px', xs: '20px' } }}
			mt='5px'
			textAlign='center'
			pb='10px'>
			2022 Fit Life❤️ by{' '}
			<a
				href='https://www.linkedin.com/in/vatsal-rajgor/'
				className={styles.footer}>
				Vatsal Rajgor
			</a>
		</Typography>
	</Box>
);

export default Footer;
