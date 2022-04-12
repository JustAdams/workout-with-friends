import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

interface Props {
    showForm: boolean;
    handleClose(): void;
}

export default function WorkoutForm(props: Props) {

    return (
        <Modal show={props.showForm} onHide={props.handleClose}>
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
    )
}