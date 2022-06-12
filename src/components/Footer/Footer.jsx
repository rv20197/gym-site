import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import styles from './Footer.module.css';

const Footer = () => {
	return (
		<Box mt='5rem' bgcolor='#FFF3F4'>
			<Stack alignItems='center' direction='row' justifyContent='center'>
				<Typography variant='h6' pb='5px' mt='5px'>
					{' '}
					Made by{' '}
					<a
						href='https://www.linkedin.com/in/vatsal-rajgor/'
						className={styles['footer']}>
						Vatsal Rajgor
					</a>
				</Typography>
			</Stack>
		</Box>
	);
};

export default Footer;
