import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { iTraining } from "../interfaces/iTraining";
import { trainingsActionsCreators } from "../reducer/trainingsActionsCreators";
import { api } from "../services/firebaseApi";

export function useTrainings() {
  const { token } = useSelector((state: RootState) => state.login);
  const trainings = useSelector((state: RootState) => state.trainings);
  const dispatch = useDispatch();

  const reloadAllTrainings = () => {
    return api.getTrainings(token).then((res) => {
      dispatch(trainingsActionsCreators.load(res));
      return res;
    });
  };

  const getTrainingById = (id: string) => {
    return api.getTrainingById(id, token);
  };

  const insertTraining = (data: iTraining) => {
    return api.insertTraining(data, token).then((res) => {
      dispatch(
        trainingsActionsCreators.add({
          ...data,
          id: res,
        })
      );
    });
  };

  const updateTraining = (id: string, data: iTraining) => {
    return api.updateTraining(id, data, token).then((res) => {
      dispatch(trainingsActionsCreators.update(res));
    });
  };

  const deleteTraining = (id: string) => {
    return api.deleteTraining(id, token).then((res) => {
      if (res.ok) {
        dispatch(trainingsActionsCreators.delete(id));
      }
    });
  };

  return {
    trainings: trainings.data,
    reloadAllTrainings,
    getTrainingById,
    insertTraining,
    updateTraining,
    deleteTraining,
  };
}
