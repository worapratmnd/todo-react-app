import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todos";

export const store = configureStore({
  reducer: {
    task: todoSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<any>
>;
