import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { sampleWorkouts } from '../data/SampleWorkouts';
import { Workout } from '../models/Workout';
import WorkoutCard from './WorkoutCard';
import WorkoutTable from './WorkoutTable';

function Dashboard() {
    const [workouts, setWorkouts] = useState<Workout[]>(sampleWorkouts);
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/workouts")
            .then((res) => {
                setWorkouts(res.data);
            }).catch((err) => {
                console.log(err);
                alert('error loading from database, is the server running?');

            });
    }, []);

    return (
        <>
            <WorkoutTable workouts={workouts} />
        </>
    )
}

export default Dashboard;