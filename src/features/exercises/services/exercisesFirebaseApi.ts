import { Exercise } from "../interfaces/Exercise";

const getExercises = (token: string): Promise<Array<Exercise>> => {
  return fetch(process.env.REACT_APP_API_URL + `/exercises.json?auth=${token}`)
    .then((res) => res.json())
    .then((res) => {
      return res
        ? Object.keys(res).map((key) => ({ ...res[key], id: key }))
        : [];
    });
};

const getExerciseById = (id: string, token: string): Promise<Exercise> => {
  return fetch(
    process.env.REACT_APP_API_URL + `/exercises/${id}.json?auth=${token}`
  )
    .then((res) => res.json())
    .then((res) => ({ ...res, id: id }));
};

const insertExercise = (data: Exercise, token: string): Promise<string> => {
  return fetch(
    process.env.REACT_APP_API_URL + `/exercises.json?auth=${token}`,
    {
      method: "POST",
      headers: { "content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((res) => res.name);
};

export const updateExercise = (
  id: string,
  data: Partial<Exercise>,
  token: string
): Promise<Exercise> => {
  const update = { ...data };
  if (data.id) delete data.id;
  return fetch(
    process.env.REACT_APP_API_URL + `/exercises/${id}.json?auth=${token}`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(update),
    }
  ).then((res) => res.json());
};

const deleteExercise = (id: string, token: string): Promise<Response> => {
  return fetch(
    process.env.REACT_APP_API_URL + `/exercises/${id}.json?auth=${token}`,
    {
      method: "DELETE",
    }
  );
};

export const api = {
  getExercises,
  getExerciseById,
  insertExercise,
  updateExercise,
  deleteExercise,
};
