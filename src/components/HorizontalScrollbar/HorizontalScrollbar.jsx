import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

import BodyPart from '../BodyPart/BodyPart';
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';

import styles from './HorizontalScrollbar.module.css';

const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext);

	return (
		<Typography onClick={() => scrollPrev()} className={styles['right-arrow']}>
			<img src={LeftArrowIcon} alt='left-arrow' />
		</Typography>
	);
};

const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);

	return (
		<Typography onClick={() => scrollNext()} className={styles['left-arrow']}>
			<img src={RightArrowIcon} alt='right-arrow' />
		</Typography>
	);
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
			{data.map(item => (
				<Box
					key={item.id || item}
					itemId={item.id || item}
					title={item.id || item}
					m='0 2.5rem'>
					{isBodyParts ? (
						<BodyPart
							item={item}
							bodyPart={bodyPart}
							setBodyPart={setBodyPart}
						/>
					) : (
						<ExerciseCard exercise={item} />
					)}
				</Box>
			))}
		</ScrollMenu>
	);
};

export default HorizontalScrollbar;
