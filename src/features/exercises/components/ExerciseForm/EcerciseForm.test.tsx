import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../redux/renderWithProviders";
import ExerciseForm from "./ExerciseForm";

describe("Given ExerciseForm component", () => {
  describe("When initial data is undefined", () => {
    test("Then all text box should be empty string", () => {
      renderWithProviders(<ExerciseForm onSave={() => jest.fn()} />);

      const inputs = screen.getAllByRole("textbox");
      inputs.forEach((input) => {
        expect((input as HTMLInputElement).value).toBe("");
      });
    });
  });

  describe("When initial data is an exercise", () => {
    test("Then text box should be the exercise data", () => {
      const exercise = {
        id: "1",
        creationDate: "2022-07-14T15:51:44.850Z",
        description: "Descripción del ejercicio",
        name: "Nombre del ejercicio",
        image: "img/imgTest.png",
        primaryTarget: "Objetivo principal",
        secondaryTarget: "Objetivo secundario",
        sources: "Enlaces fuentes",
      };
      renderWithProviders(
        <ExerciseForm initialData={exercise} onSave={() => jest.fn()} />
      );
      const inputs = screen.getAllByRole("textbox");
      inputs.forEach((input) => {
        expect((input as HTMLInputElement).value).toBe(
          exercise[(input as HTMLInputElement).name as keyof typeof exercise]
        );
      });
    });
  });

  describe("When submit the form", () => {
    test("Then should call to onSave function", () => {
      const onSave = jest.fn();
      renderWithProviders(<ExerciseForm onSave={onSave} />);
      const submit = screen.getByText(/Guardar/i);
      fireEvent.click(submit);
      expect(onSave).toBeCalledTimes(1);
    });
  });
});
