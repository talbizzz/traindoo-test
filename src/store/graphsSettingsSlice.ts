import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const graphsSettingsSlice = createSlice({
  name: "graphsSettingsSlice",
  initialState: {
    graph1: "weight",
    graph2: "caloriesAvg",
    graph3: "fatsAvg",
    graph4: "carbsAvg"
  },
  reducers: {
    changeGraph1: (state, action: PayloadAction<string>) => ({...state, graph1: action.payload}),
    changeGraph2: (state, action: PayloadAction<string>) => ({...state, graph2: action.payload}),
    changeGraph3: (state, action: PayloadAction<string>) => ({...state, graph3: action.payload}),
    changeGraph4: (state, action: PayloadAction<string>) => ({...state, graph4: action.payload})
  },
});

export const {changeGraph1, changeGraph2, changeGraph3, changeGraph4 } = graphsSettingsSlice.actions;

export default graphsSettingsSlice.reducer;
