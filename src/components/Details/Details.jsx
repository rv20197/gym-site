import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../../assets/icons/body-part.png';
import TargetImage from '../../assets/icons/target.png';
import EquipmentImage from '../../assets/icons/equipment.png';

import styles from './Details.module.css';

const Details = ({ exerciseDetail }) => {
	const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

	const extraDetail = [
		{
			id: 1,
			icon: BodyPartImage,
			name: bodyPart
		},
		{ id: 2, icon: TargetImage, name: target },
		{ id: 3, icon: EquipmentImage, name: equipment }
	];
	return (
		<Stack
			gap='3.75rem'
			sx={{ flexDirection: { lg: 'row' }, p: '1.25rem', alignItems: 'center' }}>
			<img
				src={gifUrl}
				alt={name}
				loading='lazy'
				className={styles['detail-image']}
			/>
			<Stack sx={{ gap: { lg: '2.1875rem', xs: '1.25rem' } }}>
				<Typography variant='h3' textTransform='capitalize'>
					{name}
				</Typography>
				<Typography variant='h6' textTransform='capitalize'>
					Exercise keeps you strong. {name} {` `}is one of the best exercise to
					target your {target}. It help you improve your mood and gain energy
				</Typography>
				{extraDetail.map(item => (
					<Stack key={item.id} direction='row' gap='1.5rem' alignItems='center'>
						<Button
							sx={{
								background: '#fff2db',
								borderRadius: '50%',
								width: '6.25rem',
								height: '6.25rem'
							}}>
							<img
								src={item.icon}
								alt={bodyPart}
								className={styles['body-part-img']}
							/>
						</Button>
						<Typography variant='h5' textTransform='capitalize'>
							{item.name}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Stack>
	);
};

export default Details;
