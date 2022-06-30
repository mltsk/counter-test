import { createSlice } from "@reduxjs/toolkit";
import { uniqueId } from "lodash";

export const countersSlice = createSlice({
  name: "counters",
  initialState: [],
  reducers: {
    increment: (state, action) => {
      state.map((counter) => {
        if (counter.id === action.payload) {
          counter.value += 1;
          return counter;
        }
        return counter;
      });
    },
    decrement: (state, action) => {
      state.map((counter) => {
        if (counter.id === action.payload) {
          counter.value -= 1;
          return counter;
        }
        return counter;
      });
    },
    deleteCounter: (state, action) => {
      const newState = state.filter(({ id }) => id !== action.payload);
      return newState;
    },
    addCounter: (state, action) => {
      const totalNumber = state.reduce((acc, item) => acc + item.value, 0);

      if ((state.length + 1) % 4 === 0) {
        state.push({
          id: Number(uniqueId()),
          value: totalNumber,
          type: "interactive",
        });
      } else {
        state.push({
          id: Number(uniqueId()),
          value: totalNumber,
          type: "default",
        });
      }
    },
  },
});

export const { increment, decrement, addCounter, deleteCounter } =
  countersSlice.actions;

export default countersSlice.reducer;
