export const PRIVATE_SECTION = "/private";

export const ROUTES = {
  LOGIN: "/",
  LOGOUT: PRIVATE_SECTION + "/logout",
  EXERCISES: PRIVATE_SECTION + "/exercises",
  EXERCISE_DETAIL: PRIVATE_SECTION + "/exercise/detail",
  EXERCISE_ADD: PRIVATE_SECTION + "/exercise/add",
  EXERCISE_UPDATE: PRIVATE_SECTION + "/exercise/update",
  TRAININGS: PRIVATE_SECTION + "/trainings",
  TRAININGS_DETAIL: PRIVATE_SECTION + "/trainings/detail",
  TRAININGS_ADD: PRIVATE_SECTION + "/trainings/add",
  TRAININGS_UPDATE: PRIVATE_SECTION + "/trainings/update",
};
