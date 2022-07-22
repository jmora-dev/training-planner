import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { iExercise } from "../interfaces/iExercise";
import { exercisesActionsCreators } from "../reducer/exercisesActionsCreators";
import { api } from "../services/exercisesFirebaseApi";

export function useExercises() {
  const { token } = useSelector((state: RootState) => state.login);
  const exercises = useSelector((state: RootState) => state.exercises);
  const dispatch = useDispatch();

  const reloadAllExercises = useCallback(() => {
    return api
      .getExercises(token)
      .then((res) => dispatch(exercisesActionsCreators.load(res)));
  }, [token, dispatch]);

  const getExerciseById = useCallback(
    (id: string) => {
      return api.getExerciseById(id, token);
    },
    [token]
  );

  const insertExercise = useCallback(
    (data: iExercise) => {
      return api.insertExercise(data, token).then((res) => {
        dispatch(
          exercisesActionsCreators.add({
            ...data,
            id: res,
          })
        );
      });
    },
    [token, dispatch]
  );

  const updateExercise = useCallback(
    (id: string, data: iExercise) => {
      return api.updateExercise(id, data, token).then((res) => {
        dispatch(exercisesActionsCreators.update(res));
      });
    },
    [token, dispatch]
  );

  const deleteExercise = useCallback(
    (id: string) => {
      return api.deleteExercise(id, token).then((res) => {
        if (res.ok) {
          dispatch(exercisesActionsCreators.delete(id));
        }
      });
    },
    [token, dispatch]
  );

  return useMemo(
    () => ({
      exercises: exercises.data,
      reloadAllExercises,
      getExerciseById,
      insertExercise,
      updateExercise,
      deleteExercise,
    }),
    [
      exercises,
      reloadAllExercises,
      getExerciseById,
      insertExercise,
      updateExercise,
      deleteExercise,
    ]
  );
}
