import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { iTraining } from "../interfaces/iTraining";
import { api } from "../services/firebaseApi";

export function useApi() {
  const { token } = useSelector((state: RootState) => state.login);

  const getTrainings = () => {
    return api.getTrainings(token);
  };

  const getTrainingById = (id: string) => {
    return api.getTrainingById(id, token);
  };

  const insertTraining = (data: iTraining) => {
    return api.insertTraining(data, token);
  };

  const updateTraining = (id: string, data: iTraining) => {
    return api.updateTraining(id, data, token);
  };

  const deleteTraining = (id: string) => {
    return api.deleteTraining(id, token);
  };

  return {
    getTrainings,
    getTrainingById,
    insertTraining,
    updateTraining,
    deleteTraining,
  };
}
