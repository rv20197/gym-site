import React from 'react';
import { Stack } from '@mui/material';
import { Circles } from 'react-loader-spinner';

const Loader = () => {
	return (
		<Stack
			direction='row'
			justifyContent='center'
			alignItemContent='center'
			width='100%'>
			<Circles color='gray' />
		</Stack>
	);
};

export default Loader;