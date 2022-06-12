import React from 'react';

import { Stack, Typography } from '@mui/material';

import gymIcon from '../../assets/icons/gym.png';
import styles from './BodyPart.module.css';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
	const bodyPartClickHandler = () => {
		setBodyPart(item);
		window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
	};
	return (
		<Stack
			type='button'
			alignItems='center'
			justifyContent='center'
			className={styles['bodyPart-card']}
			sx={{
				borderTop: bodyPart === item ? '0.25rem solid #FF2625' : '',
				backgroundColor: '#FFF',
				borderBottomLeftRadius: '1.25rem',
				width: '16.875rem',
				height: '17.5rem',
				cursor: 'pointer',
				gap: '2.9375rem'
			}}
			onClick={bodyPartClickHandler}>
			<img src={gymIcon} alt='dumbell' className={styles['gym-icon']} />
			<Typography
				fontSize='1.5rem'
				fontWeight='bold'
				color='#3A1212'
				textTransform='capitalize'>
				{item}
			</Typography>
		</Stack>
	);
};

export default BodyPart;
