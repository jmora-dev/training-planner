import { Route, Routes } from "react-router-dom";
import AddExercise from "./features/exercises/pages/AddExercise";
import Exercises from "./features/exercises/pages/Exercises";
import UpdateExercise from "./features/exercises/pages/UpdateExercise";

export default function App() {
  const signIn = () => {
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: "dam2mora@gmail.com",
          password: "123456",
          returnSecureToken: true,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <>
      <button onClick={signIn}>signIn</button>
      <Routes>
        <Route path="/" element={<Exercises />} />
        <Route path="/exercises/add" element={<AddExercise />} />
        <Route
          path="/exercises/update/:exerciseId"
          element={<UpdateExercise />}
        />
      </Routes>
    </>
  );
}
