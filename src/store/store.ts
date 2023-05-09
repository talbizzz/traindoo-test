import { configureStore } from "@reduxjs/toolkit";
import graphsSettingsSlice from "./graphsSettingsSlice";

export default configureStore({
  reducer: {
    graphsSettings: graphsSettingsSlice,
  },
});
