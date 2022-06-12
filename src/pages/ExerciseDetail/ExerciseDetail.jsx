import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {
	exerciseOptions,
	youtubeOptions,
	fetchData
} from '../../utils/fetchData';

import Details from '../../components/Details/Details';
import ExerciseVideos from '../../components/ExerciseVideos/ExerciseVideos';
import SimilarExercises from '../../components/SimilarExercises/SimilarExercises';

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchExercisesData = async () => {
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises';
			const youtubeSearchUrl =
				'https://youtube-search-and-download.p.rapidapi.com/search';

			const exerciseDetailData = await fetchData(
				`${exerciseDbUrl}/exercise/${id}`,
				exerciseOptions
			);

			const exerciseVideoData = await fetchData(
				`${youtubeSearchUrl}?query=${exerciseDetailData.name}`,
				youtubeOptions
			);
			setExerciseDetail(exerciseDetailData);
			setExerciseVideos(exerciseVideoData.contents);
		};
		fetchExercisesData();
	}, [id]);

	return (
		<Box>
			<Details exerciseDetail={exerciseDetail} />
			<ExerciseVideos
				exerciseVideos={exerciseVideos}
				exerciseName={exerciseDetail.name}
			/>
			<SimilarExercises />
		</Box>
	);
};

export default ExerciseDetail;
