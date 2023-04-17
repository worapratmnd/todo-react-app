import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces/todo";
import { RootState } from ".";

const initialState: ITodo[] = [];

export const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITodo>) => {
      state = [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          completed: false,
        },
      ];
      return state;
    },
    toggleTask: (state, action: PayloadAction<ITodo>) => {
      state = state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
      return state;
    },
    updateTask: (state, action: PayloadAction<ITodo>) => {
      state = state.map((task) =>
        task.id === action.payload.id ? { ...action.payload } : task
      );
      return state;
    },
    deleteTask: (state, action: PayloadAction<ITodo>) => {
      state = state.filter((task) => task.id !== action.payload.id);
      return state;
    },
  },
});

export const getTask = (state: RootState) => state.task;

export const { addTask, toggleTask, updateTask, deleteTask } =
  todoSlice.actions;
