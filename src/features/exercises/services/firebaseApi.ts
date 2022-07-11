import { FIREBASE_URL } from "../../../config/firebaseUrl";
import { iExercise } from "../interfaces/iExercise";
import { iExerciseAdding } from "../interfaces/iExerciseAdding";

const getExercises = (): Promise<Array<iExercise>> => {
  return fetch(FIREBASE_URL + "/exercises.json")
    .then((res) => res.json())
    .then((res) => {
      return res
        ? Object.keys(res).map((key) => ({ ...res[key], id: key }))
        : [];
    });
};

const getExerciseById = (id: string): Promise<iExercise> => {
  return fetch(FIREBASE_URL + `/exercises/${id}.json`)
    .then((res) => res.json())
    .then((res) => ({ ...res, id: id }));
};

const insertExercise = (data: iExerciseAdding): Promise<string> => {
  return fetch(FIREBASE_URL + "/exercises.json", {
    method: "POST",
    headers: { "content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => res.name);
};

export const updateExercise = (id: string, data: Partial<iExercise>) => {
  const update = { ...data };
  if (data.id) delete data.id;
  return fetch(FIREBASE_URL + `/exercises/${id}.json`, {
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

const deleteExercise = (id: string): Promise<Response> => {
  return fetch(FIREBASE_URL + `/exercises/${id}.json`, {
    method: "DELETE",
  });
};

export const api = {
  getExercises,
  getExerciseById,
  insertExercise,
  updateExercise,
  deleteExercise,
};
