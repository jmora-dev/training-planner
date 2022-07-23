import { Training } from "../interfaces/Training";

const getTrainings = (token: string): Promise<Array<Training>> => {
  return fetch(process.env.REACT_APP_API_URL + `/trainings.json?auth=${token}`)
    .then((res) => res.json())
    .then((res) => {
      return res
        ? Object.keys(res).map((key) => ({ ...res[key], id: key }))
        : [];
    });
};

const getTrainingById = (id: string, token: string): Promise<Training> => {
  return fetch(
    process.env.REACT_APP_API_URL + `/trainings/${id}.json?auth=${token}`
  )
    .then((res) => res.json())
    .then((res) => ({ ...res, id: id }));
};

const insertTraining = (data: Training, token: string): Promise<string> => {
  return fetch(
    process.env.REACT_APP_API_URL + `/trainings.json?auth=${token}`,
    {
      method: "POST",
      headers: { "content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((res) => res.name);
};

export const updateTraining = (
  id: string,
  data: Partial<Training>,
  token: string
) => {
  const update = { ...data };
  if (data.id) delete data.id;
  return fetch(
    process.env.REACT_APP_API_URL + `/trainings/${id}.json?auth=${token}`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(update),
    }
  ).then((res) => res.json());
};

const deleteTraining = (id: string, token: string): Promise<Response> => {
  return fetch(
    process.env.REACT_APP_API_URL + `/trainings/${id}.json?auth=${token}`,
    {
      method: "DELETE",
    }
  );
};

export const api = {
  getTrainings,
  getTrainingById,
  insertTraining,
  updateTraining,
  deleteTraining,
};
