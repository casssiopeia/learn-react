import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../store/async-action";

export const Todo = ({ title, completed, id, createdAt }) => {
  const date = new Date(createdAt);
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(toggleTodo(id, completed));
  };

  const onDelete = () => {
    dispatch(deleteTodo(id));
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Footer>
          <Card.Subtitle>{date.toUTCString()}</Card.Subtitle>
        </Card.Footer>
        <Button onClick={onToggle} variant={completed ? "success" : "danger"}>
          complete
        </Button>
        <Button onClick={onDelete} variant="primary">delete</Button>
      </Card.Body>
    </Card>
  );
};
