import React from "react";
import Table from 'react-bootstrap/Table'
import { Workout } from "../models/Workout";

interface Props {
  workouts: Workout[];
}

export default function WorkoutTable({ workouts }: Props) {
  return (
    <>
    <h3>Previous Workouts</h3>
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>Workout</th>
            <th>Name</th>
            <th>Weight</th>
            <th>Reps</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <tr key={workout.id}>
              <td>{workout.workoutName}</td>
              <td>{workout.personName}</td>
              <td>{workout.weight}</td>
              <td>{workout.reps}</td>
              <td>{workout.day}</td>
            </tr>
          ))}
        </tbody>
    </Table>
    </>
  );
}
