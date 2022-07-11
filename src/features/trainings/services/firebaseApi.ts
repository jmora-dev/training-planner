import { FIREBASE_URL } from "../../../config/firebaseUrl";
import { iTraining } from "../interfaces/iTraining";

const getTrainings = (): Promise<Array<iTraining>> => {
  return fetch(FIREBASE_URL + "/trainings.json")
    .then((res) => res.json())
    .then((res) => {
      return res
        ? Object.keys(res).map((key) => ({ ...res[key], id: key }))
        : [];
    });
};

const getTrainingById = (id: string): Promise<iTraining> => {
  return fetch(FIREBASE_URL + `/trainings/${id}.json`)
    .then((res) => res.json())
    .then((res) => ({ ...res, id: id }));
};

const insertTraining = (data: iTraining): Promise<string> => {
  return fetch(FIREBASE_URL + "/trainings.json", {
    method: "POST",
    headers: { "content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => res.name);
};

export const updateTraining = (id: string, data: Partial<iTraining>) => {
  const update = { ...data };
  if (data.id) delete data.id;
  return fetch(FIREBASE_URL + `/trainings/${id}.json`, {
    method: "PATCH",
    headers: { "content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(update),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    });
};

const deleteTraining = (id: string): Promise<Response> => {
  return fetch(FIREBASE_URL + `/trainings/${id}.json`, {
    method: "DELETE",
  });
};

export const api = {
  getTrainings,
  getTrainingById,
  insertTraining,
  updateTraining,
  deleteTraining,
};
