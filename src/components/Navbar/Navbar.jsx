import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../../assets/images/Logo.png';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<Stack
			direction='row'
			justifyContent='space-around'
			sx={{
				gap: { sm: '7.625rem', xs: '2.5rem' },
				mt: { sm: '2rem', xs: '1.25rem' },
				justifyContent: 'none'
			}}
			px='1.25rem'>
			<Link to='/'>
				<img src={Logo} alt='Logo' className={styles.Logo} />
			</Link>
			<Stack
				direction='row'
				gap='2.5rem'
				fontSize='1.5rem'
				alignItems='flex-end'>
				<Link to='/' className={styles.Home}>
					Home
				</Link>
				<a href='#excercises' className={styles.excercises}>
					Excercises
				</a>
			</Stack>
		</Stack>
	);
};

export default Navbar;
