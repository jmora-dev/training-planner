import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { iTraining } from "../interfaces/iTraining";
import { trainingsActionsCreators } from "../reducer/trainingsActionsCreators";
import { api } from "../services/firebaseApi";

export function useTrainings() {
  const { token } = useSelector((state: RootState) => state.login);
  const trainings = useSelector((state: RootState) => state.trainings);
  const dispatch = useDispatch();

  const reloadAllTrainings = useCallback(() => {
    return api.getTrainings(token).then((res) => {
      dispatch(trainingsActionsCreators.load(res));
      return res;
    });
  }, [token, dispatch]);

  const getTrainingById = useCallback(
    (id: string) => {
      return api.getTrainingById(id, token);
    },
    [token]
  );

  const insertTraining = useCallback(
    (data: iTraining) => {
      return api.insertTraining(data, token).then((res) => {
        dispatch(
          trainingsActionsCreators.add({
            ...data,
            id: res,
          })
        );
      });
    },
    [token, dispatch]
  );

  const updateTraining = useCallback(
    (id: string, data: iTraining) => {
      return api.updateTraining(id, data, token).then((res) => {
        dispatch(trainingsActionsCreators.update(res));
      });
    },
    [token, dispatch]
  );

  const deleteTraining = useCallback(
    (id: string) => {
      return api.deleteTraining(id, token).then((res) => {
        if (res.ok) {
          dispatch(trainingsActionsCreators.delete(id));
        }
      });
    },
    [token, dispatch]
  );

  return useMemo(
    () => ({
      trainings: trainings.data,
      reloadAllTrainings,
      getTrainingById,
      insertTraining,
      updateTraining,
      deleteTraining,
    }),
    [
      trainings,
      reloadAllTrainings,
      getTrainingById,
      insertTraining,
      updateTraining,
      deleteTraining,
    ]
  );
}
