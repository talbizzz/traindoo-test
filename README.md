### Don't forget => `npm install`

# Task

1. Find a suitable chart library and install it (e.g. <https://recharts.org/en-US/>)
2. GraphComponent: create a new graph component  
   2.1 GraphComponent: pass the data to be displayed through the props  
   2.2. TestComponent: include the new component into the TestComponent  
   2.3. TestComponent: Use the getDailyCheckValues function (exampleData.ts) to get the DailyCheck data  
   2.4. GraphComponent: show the weight history of the user
3. SelectGraphComponent: Create a wrapper for GraphComponent with four selection buttons  
   3.1 SelectGraphComponent: Allow the user to select different graphs with the buttons (e.g. weight, calories etc.)
4. Use CSS Classes or react styles to give the SelectGraphComponent an appealing and intuitive design
5. TestComponent: add a button with which the user can display additional SelectGraphComponents (Like a customisable dashboard)  
   5.1. graphsSettingsSlice: store and read all information about the additional graphs in Redux (e.g. as string array)
6. persist the Redux store using redux-persist (already installed)  
   5.1 Extend `store.ts` with Redux Persist  
   5.2. add the persist gate to `index.tsx`
