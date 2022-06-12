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
	const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
	const [equipmentExercises, setEquipmentExercises] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		const fetchExercisesData = async () => {
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
			const youtubeSearchUrl =
				'https://youtube-search-and-download.p.rapidapi.com/search';

			const exerciseDetailData = await fetchData(
				`${exerciseDbUrl}/exercises/exercise/${id}`,
				exerciseOptions
			);

			const exerciseVideoData = await fetchData(
				`${youtubeSearchUrl}?query=${exerciseDetailData.name}`,
				youtubeOptions
			);

			const targetMuscleExerciseData = await fetchData(
				`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
				exerciseOptions
			);

			const equipmentExerciseData = await fetchData(
				`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
				exerciseOptions
			);

			setExerciseDetail(exerciseDetailData);
			setExerciseVideos(exerciseVideoData.contents);
			setTargetMuscleExercises(targetMuscleExerciseData);
			setEquipmentExercises(equipmentExerciseData);
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
			<SimilarExercises
				targetMuscleExercises={targetMuscleExercises}
				equipmentExercises={equipmentExercises}
			/>
		</Box>
	);
};

export default ExerciseDetail;
