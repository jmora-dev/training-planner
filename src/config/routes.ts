export const PRIVATE_SECTION = "/private";

export const ROUTES = {
  LOGIN: "/",
  LOGOUT: PRIVATE_SECTION + "/logout",
  EXERCISES: PRIVATE_SECTION + "/exercises",
  EXERCISES_DETAIL: PRIVATE_SECTION + "/exercises/detail",
  EXERCISES_ADD: PRIVATE_SECTION + "/exercises/add",
  EXERCISES_UPDATE: PRIVATE_SECTION + "/exercises/update",
  TRAININGS: PRIVATE_SECTION + "/trainings",
  TRAININGS_DETAIL: PRIVATE_SECTION + "/trainings/detail",
  TRAININGS_ADD: PRIVATE_SECTION + "/trainings/add",
  TRAININGS_UPDATE: PRIVATE_SECTION + "/trainings/update",
};
