import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINT } from "../constants/api";

export const getUsers = createAsyncThunk(
  "getUsers",
  async (payload, thunkApi) => {
    const raw = await fetch(`${ENDPOINT}/users`);
    const users = await raw.json();

    return thunkApi.fulfillWithValue(users);
  }
);

export const getTodos = createAsyncThunk("getTodos", async (_, thunkApi) => {
  const raw = await fetch(`${ENDPOINT}/todos/all`);
  const todos = await raw.json();

  return thunkApi.fulfillWithValue(todos);
});

export const postTodo = createAsyncThunk(
  "postTodo",
  async (todoText, thunkApi) => {
    const raw = await fetch(`${ENDPOINT}/todos/all`, {
      method: "POST",
      body: JSON.stringify({ todoText }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const response = await raw.json();

    if (response.error) {
      return thunkApi.rejectWithValue(response.error.message);
    }

    return thunkApi.fulfillWithValue(response);
  }
);

export const toggleTodo = createAsyncThunk(
  "toggleTodo",
  async (id, completed, thunkApi) => {
    const raw = await fetch(`${ENDPOINT}/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ id, completed }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const updatedTodo = await raw.json();

    return thunkApi.fulfillWithValue(updatedTodo);
  }
);

export const deleteTodo = createAsyncThunk(
  "deleteTodo",
  async (id, thunkApi) => {
    const raw = await fetch(`${ENDPOINT}/todos/${id}`, {
      method: "DELETE",
    });

    if (raw.status === 202) {
      const response = await raw.json();

      return thunkApi.fulfillWithValue(response);
    }

    return thunkApi.rejectWithValue({error: 'smth went wrong'});
});
