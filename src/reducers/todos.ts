import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces/todo";
import { RootState } from ".";

const initialState: ITodo[] = [];

export const fetchTasks = createAsyncThunk("task/tetchTask", async () => {
  let res = await fetch(`${process.env.REACT_APP_API_URL}/todos`);
  return res.json();
});

export const fetchAddTasks = createAsyncThunk(
  "tasks/fetchAddTasks",
  async (task: ITodo) => {
    let res = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    return res.json();
  }
);

export const fetchEditTasks = createAsyncThunk(
  "tasks/fetchEditTasks",
  async (task: ITodo) => {
    let res = await fetch(`${process.env.REACT_APP_API_URL}/todos/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    return res.json();
  }
);

export const fetchCompleteTask = createAsyncThunk(
  "tasks/fetchCompleteTask",
  async (task: ITodo) => {
    let res = await fetch(`${process.env.REACT_APP_API_URL}/todos/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...task, completed: !task.completed }),
    });
    return res.json();
  }
);

export const fetchRemoveTask = createAsyncThunk(
  "tasks/fetchRemoveTask",
  async (task: ITodo) => {
    let res = await fetch(`${process.env.REACT_APP_API_URL}/todos/${task.id}`, {
      method: "DELETE",
    });
    return task;
  }
);

const addTaskAction = (state: ITodo[], action: PayloadAction<ITodo>) => {
  state = [
    ...state,
    {
      id: action.payload.id,
      title: action.payload.title,
      completed: false,
    },
  ];
  return state;
};

const toggleTaskAction = (state: ITodo[], action: PayloadAction<ITodo>) => {
  state = state.map((task) =>
    task.id === action.payload.id
      ? { ...task, completed: !task.completed }
      : task
  );
  return state;
};

const updateTaskAction = (state: ITodo[], action: PayloadAction<ITodo>) => {
  state = state.map((task) =>
    task.id === action.payload.id ? { ...action.payload } : task
  );
  return state;
};

const removeTaskAction = (state: ITodo[], action: PayloadAction<ITodo>) => {
  state = state.filter((task) => task.id !== action.payload.id);
  return state;
};

export const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: addTaskAction,
    toggleTask: toggleTaskAction,
    updateTask: updateTaskAction,
    deleteTask: removeTaskAction,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
    builder.addCase(fetchAddTasks.fulfilled, addTaskAction);
    builder.addCase(fetchEditTasks.fulfilled, updateTaskAction);
    builder.addCase(fetchCompleteTask.fulfilled, updateTaskAction);
    builder.addCase(fetchRemoveTask.fulfilled, removeTaskAction);
  },
});

export const getTask = (state: RootState) => state.task;

export const { addTask, toggleTask, updateTask, deleteTask } =
  todoSlice.actions;
