import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { iExercise } from "../interfaces/iExercise";
import { exercisesActionsCreators } from "../reducer/exercisesActionsCreators";
import { api } from "../services/firebaseApi";

export function useExercises() {
  const { token } = useSelector((state: RootState) => state.login);
  const exercises = useSelector((state: RootState) => state.exercises);
  const dispatch = useDispatch();

  const reloadAllExercises = () => {
    return api
      .getExercises(token)
      .then((res) => dispatch(exercisesActionsCreators.load(res)));
  };

  const getExerciseById = (id: string) => {
    return api.getExerciseById(id, token);
  };

  const insertExercise = (data: iExercise) => {
    return api.insertExercise(data, token).then((res) => {
      dispatch(
        exercisesActionsCreators.add({
          ...data,
          id: res,
        })
      );
    });
  };

  const updateExercise = (id: string, data: iExercise) => {
    return api.updateExercise(id, data, token).then((res) => {
      dispatch(exercisesActionsCreators.update(res));
    });
  };

  const deleteExercise = (id: string) => {
    return api.deleteExercise(id, token).then((res) => {
      if (res.ok) {
        dispatch(exercisesActionsCreators.delete(id));
      }
    });
  };

  return {
    exercises: exercises.data,
    reloadAllExercises,
    getExerciseById,
    insertExercise,
    updateExercise,
    deleteExercise,
  };
}
