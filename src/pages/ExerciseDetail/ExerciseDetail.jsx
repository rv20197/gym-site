import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData } from '../../utils/fetchData';

import Details from '../../components/Details/Details';
import ExerciseVideos from '../../components/ExerciseVideos/ExerciseVideos';
import SimilarExercises from '../../components/SimilarExercises/SimilarExercises';

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const fetchExercisesData = async () => {
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises';
			const youtubeSearchUrl =
				'https://youtube-search-and-download.p.rapidapi.com';
			const exerciseDetailData = await fetchData(
				`${exerciseDbUrl}/exercise/${id}`,
				exerciseOptions
			);
			setExerciseDetail(exerciseDetailData);
		};
		fetchExercisesData();
	}, [id]);

	return (
		<Box>
			<Details exerciseDetail={exerciseDetail} />
			<ExerciseVideos />
			<SimilarExercises />
		</Box>
	);
};

export default ExerciseDetail;
