import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces/todo";
import { RootState } from ".";

const initialState: ITodo[] = [];

// const todos = (state: ITodo[] = [], action: any) => {
//   switch (action.type) {
//     case "ADD_TASK":
//       return [
//         ...state,
//         {
//           id: action.id,
//           title: action.title,
//           completed: false,
//         },
//       ];
//     case "TOGGLE_TASK":
//       return state.map((task) =>
//         task.id === action.id ? { ...task, completed: !task.completed } : task
//       );
//     default:
//       return state;
//   }
// };

// export default todos;

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
      console.log("action: ", action);
      state = state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
      console.log("toggleTask: ", state);
      return state;
    },
  },
});

export const getTask = (state: RootState) => state.task;

export const { addTask, toggleTask } = todoSlice.actions;
