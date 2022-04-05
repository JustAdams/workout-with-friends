import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { sampleWorkouts } from '../data/SampleWorkouts';
import { Workout } from '../models/Workout';
import WorkoutCard from './WorkoutCard';

function Dashboard() {
    const [workouts, setWorkouts] = useState<Workout[]>();
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/workouts")
            .then((res) => {
                setWorkouts(res.data);
            }).catch((err) => {
                console.log(err);
                alert('error loading from database, is the server running?');
                setWorkouts(sampleWorkouts);
            });
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