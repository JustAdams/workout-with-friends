import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { sampleWorkouts } from "../data/SampleWorkouts";
import { Workout } from "../models/Workout";
import LoadingSpinner from "./ui/LoadingSpinner";
import WorkoutTable from "./WorkoutTable";

function Dashboard() {
  const [workouts, setWorkouts] = useState<Workout[]>(sampleWorkouts);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/workouts")
      .then((res) => {
        setWorkouts(res.data);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <hr />
      <Button onClick={handleShow}>Add Workout</Button>

      <Modal show={showForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Workout</Modal.Title>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Enter workout" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Enter weight" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Enter reps" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Enter name" />
              </Form.Group>
              <Button type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Header>
      </Modal>

        {isLoading 
            ? <LoadingSpinner /> 
            : <WorkoutTable workouts={workouts} />
        }
    </>
  );
}

export default Dashboard;
