import React from 'react';
import { Workout } from '../models/Workout';

interface Props {
    workout: Workout;
}

export default function WorkoutCard({workout}: Props) {

    return (
        <div>
            <p>{workout.workoutName}</p>
        </div>
    )
}