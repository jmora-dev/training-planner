import { MemoryRouter } from "react-router-dom";
import { useExercises } from "./useExercises";
import { api } from "../services/firebaseApi";
import { renderWithProviders } from "../../../redux/renderWithProviders";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { useState } from "react";
import { iExercise } from "../interfaces/iExercise";

jest.mock("../services/firebaseApi");

const exercisesForReloadAll = [
  {
    id: "1",
    creationDate: "2022-07-17T15:59:59.532Z",
    name: "Exercise 1",
    description: "Descripcción del ejercicio",
    image: "img/img.png",
    primaryTarget: "Pases",
    secondaryTarget: "Velocidad",
    sources: "http://pagina.com/recursos",
  },
  {
    id: "2",
    creationDate: "2022-07-17T15:59:59.532Z",
    name: "Exercise 2",
    description: "Descripcción del ejercicio",
    image: "img/img.png",
    primaryTarget: "Pases",
    secondaryTarget: "Velocidad",
    sources: "http://pagina.com/recursos",
  },
];

describe("Given useExercise hook", () => {
  let TestComponent: Function;
  beforeEach(() => {
    TestComponent = () => {
      const {
        exercises,
        reloadAllExercises,
        getExerciseById,
        insertExercise,
        updateExercise,
        deleteExercise,
      } = useExercises();

      const [exerciseSearched, setExerciseSearched] =
        useState<iExercise | null>(null);

      const getById = () => {
        getExerciseById("1").then((res) => {
          setExerciseSearched(res);
        });
      };

      const insert = () => {
        insertExercise({
          id: "1",
          creationDate: "2022-07-17T15:59:59.532Z",
          name: "Nombre del ejercicio",
          description: "Descripcción del ejercicio",
          image: "img/img.png",
          primaryTarget: "Pases",
          secondaryTarget: "Velocidad",
          sources: "http://pagina.com/recursos",
        });
      };

      const update = () => {
        updateExercise("1", {
          creationDate: "2022-07-17T15:59:59.532Z",
          name: "Nombre actualizado",
          description: "Descripcción actualizada",
          image: "img/img.png",
          primaryTarget: "Pases",
          secondaryTarget: "Velocidad",
          sources: "http://pagina.com/recursos",
        });
      };

      return (
        <MemoryRouter>
          <>
            <p>Count {exercises.length}</p>
            <ul>
              {exercises.map((exercise) => (
                <li key={exercise.id}>{exercise.name}</li>
              ))}
            </ul>
            <button onClick={() => reloadAllExercises()}>ReloadAll</button>
            <button onClick={() => getById()}>Exercise by id</button>
            <p>
              Searched: {exerciseSearched != null ? exerciseSearched.name : ""}
            </p>
            <button onClick={() => insert()}>Insert</button>
            <button onClick={() => update()}>Update</button>
            <button onClick={() => deleteExercise("1")}>Delete</button>
          </>
        </MemoryRouter>
      );
    };
  });

  describe("When reload all exercises", () => {
    test("Then exercises data should have two mock items", async () => {
      (api.getExercises as jest.Mock).mockResolvedValue(exercisesForReloadAll);
      renderWithProviders(<TestComponent />);
      screen.getByText(/Count 0/i);
      const reloadAllButton = screen.getByText(/ReloadAll/i);
      fireEvent.click(reloadAllButton);
      await screen.findByText(/Count 2/i);
      await screen.findByText(/Exercise 1/i);
      await screen.findByText(/Exercise 2/i);
    });
  });

  describe("When search exercise by id", () => {
    test("Then exercise name should be paint in searched paragraph", async () => {
      (api.getExerciseById as jest.Mock).mockResolvedValue({
        id: "1",
        creationDate: "2022-07-17T15:59:59.532Z",
        name: "Exercise",
        description: "Descripcción del ejercicio",
        image: "img/img.png",
        primaryTarget: "Pases",
        secondaryTarget: "Velocidad",
        sources: "http://pagina.com/recursos",
      });
      renderWithProviders(<TestComponent />);
      screen.getByText(/^Searched:$/i);
      const searchByIdButton = screen.getByText(/Exercise by id/i);
      fireEvent.click(searchByIdButton);
      await screen.findByText(/^Searched: Exercise$/i);
    });
  });

  describe("When insert new exercise", () => {
    test("Then exercises data should have the new exercise", async () => {
      (api.insertExercise as jest.Mock).mockResolvedValue("1");
      renderWithProviders(<TestComponent />);
      screen.getByText(/Count 0/i);
      const insertButton = screen.getByText(/Insert/i);
      fireEvent.click(insertButton);
      await screen.findByText(/Count 1/i);
      await screen.findByText(/Nombre del ejercicio/i);
    });
  });

  describe("When update an exercise", () => {
    test("Then exercise data should have the new data", async () => {
      (api.getExercises as jest.Mock).mockResolvedValue(exercisesForReloadAll);
      (api.updateExercise as jest.Mock).mockResolvedValue({
        id: "1",
        creationDate: "2022-07-17T15:59:59.532Z",
        name: "Update name",
        description: "Descripcción actualizada",
        image: "img/img.png",
        primaryTarget: "Pases",
        secondaryTarget: "Velocidad",
        sources: "http://pagina.com/recursos",
      });
      renderWithProviders(<TestComponent />);
      const reloadAllButton = screen.getByText(/ReloadAll/i);
      fireEvent.click(reloadAllButton);
      await screen.findByText(/Count 2/i);
      await screen.findByText(/Exercise 1/i);
      const updateButton = screen.getByText(/Update/i);
      fireEvent.click(updateButton);
      await screen.findByText(/Count 2/i);
      await screen.findByText(/Update name/i);
    });
  });

  describe("When delete an exercise", () => {
    test("Then exercise data should not have the deleted exercise", async () => {
      (api.getExercises as jest.Mock).mockResolvedValue(exercisesForReloadAll);
      (api.deleteExercise as jest.Mock).mockResolvedValue({ ok: true });
      renderWithProviders(<TestComponent />);
      const reloadAllButton = screen.getByText(/ReloadAll/i);
      fireEvent.click(reloadAllButton);
      await screen.findByText(/Count 2/i);
      await screen.findByText(/Exercise 1/i);
      const deleteButton = screen.getByText(/Delete/i);
      fireEvent.click(deleteButton);
      await screen.findByText(/Count 1/i);
      await waitFor(() => {
        expect(screen.queryByText(/Exercise 1/i)).not.toBeInTheDocument();
      });
    });
  });
});
