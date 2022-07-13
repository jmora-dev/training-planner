import { iTraining } from "../interfaces/iTraining";

const getTrainings = (token: string): Promise<Array<iTraining>> => {
  return fetch(process.env.REACT_APP_API_URL + `/trainings.json?auth=${token}`)
    .then((res) => res.json())
    .then((res) => {
      return res
        ? Object.keys(res).map((key) => ({ ...res[key], id: key }))
        : [];
    });
};

const getTrainingById = (id: string, token: string): Promise<iTraining> => {
  return fetch(
    process.env.REACT_APP_API_URL + `/trainings/${id}.json?auth=${token}`
  )
    .then((res) => res.json())
    .then((res) => ({ ...res, id: id }));
};

const insertTraining = (data: iTraining, token: string): Promise<string> => {
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
  data: Partial<iTraining>,
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
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    });
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
