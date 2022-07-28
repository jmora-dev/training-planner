import React from "react";
import { ROUTES } from "../../../../config/routes";
import { Button } from "../../../../ui";
import { BUTTON_STYLE, BUTTON_TYPE } from "../../../../ui/Button/Button";
import { Training } from "../../interfaces/Training";
import TrainingCard from "../TrainingCard/TrainingCard";
import "./table.scss";
import "./trainingList.css";

interface TrainingsListProps {
  trainings: Array<Training>;
}

export default function TrainingsList({ trainings }: TrainingsListProps) {
  return (
    <div className="wrap">
      <div className="table-wrapper">
        <table className="card-list-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Equipo</th>
              <th>Objetivo</th>
              <th>Ejercicios</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((training) => (
              <tr key={training.id}>
                <td>{training.name}</td>
                <td>{training.team}</td>
                <td>{training.target}</td>
                <td>{training.exercises.length}</td>
                <td style={{ display: "flex", gap: "0.5rem" }}>
                  <Button
                    type={BUTTON_TYPE.LINK}
                    style={BUTTON_STYLE.TEXT}
                    to={`${ROUTES.TRAININGS_UPDATE}/${training.id}`}
                    text="Modificar"
                  />
                  <Button
                    type={BUTTON_TYPE.LINK}
                    style={BUTTON_STYLE.TEXT}
                    to={`${ROUTES.TRAININGS_DETAIL}/${training.id}`}
                    text="Ver"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // <ul className="training-list">
    //   {trainings.map((training) => (
    //     <li key={training.id} className="training-list__item">
    //       <TrainingCard training={training} />
    //     </li>
    //   ))}
    // </ul>
  );
}
