import React, { useEffect, useState } from 'react';
import { sampleWorkouts } from '../data/SampleWorkouts';
import { Workout } from '../models/Workout';
import WorkoutCard from './WorkoutCard';

function Dashboard() {
    const [workouts, setWorkouts] = useState<Workout[]>();

    useEffect(() => {
        setWorkouts(sampleWorkouts);
    }, []);

    return (
        <>
            {workouts?.map(workout =>
                <WorkoutCard workout={workout} />
            )}
        </>
    )
}

export default Dashboard;