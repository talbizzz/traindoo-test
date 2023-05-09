import React, {CSSProperties} from "react";
import GraphComponent from "./GraphComponent";
import {getDailyCheckValues} from '../utils/exampleData'
import './styles.css'
import SelectGraphComponent from "./SelectGraphComponent";
import {useDispatch, useSelector} from "react-redux";
import {changeGraph1, changeGraph2, changeGraph3, changeGraph4} from "../store/graphsSettingsSlice";

type Props = {
  title: string;
};

export const TestComponent = (props: Props) => {
  // @ts-ignore
  const graphs = useSelector(state => state.graphsSettings)
  const dispatch = useDispatch()

  const fetchData = (dataType) => {
    switch (dataType) {
      case "weight": {
        return getDailyCheckValues().weight.values
      }
      case "caloriesAvg": {
        return getDailyCheckValues().caloriesAvg.values
      }
      case "fatsAvg": {
        return getDailyCheckValues().fatsAvg.values
      }
      case "carbsAvg": {
        return getDailyCheckValues().carbsAvg.values
      }
      default : {
        return null;
      }
    }
  }
  const dispatchWithNewGraphName = (graphToChange, newName) => {
    console.log(graphToChange)
    console.log(newName)
    switch (graphToChange) {
      case 1 : {
        dispatch(changeGraph1(newName))
        break;
      }
      case 2 : {
        dispatch(changeGraph2(newName))
        break;
      }
      case 3 : {
        dispatch(changeGraph3(newName))
        break;
      }
      case 4 : {
        dispatch(changeGraph4(newName))
        break;
      }
    }
  }


  return (
    <div style={styles.container}>
      <SelectGraphComponent data={fetchData(graphs.graph1)} onClick={dispatchWithNewGraphName} graphNo={1}/>
      <SelectGraphComponent data={fetchData(graphs.graph2)} onClick={dispatchWithNewGraphName} graphNo={2}/>
      <SelectGraphComponent data={fetchData(graphs.graph3)} onClick={dispatchWithNewGraphName} graphNo={3}/>
      <SelectGraphComponent data={fetchData(graphs.graph4)} onClick={dispatchWithNewGraphName} graphNo={4}/>
    </div>
  );
};

function refactorFetchedData(data) {
  data.map(val => {
    return {name: val.date}
  })
}

type Styles = {
  container: CSSProperties;
};

const styles: Styles = {
  container: {
    border: "solid 0.5px rgba(255, 255, 255, 0.35)",
    width: "90%",
    height: "90%",
    borderRadius: 20,
    padding: "5% 0 5% 0",
    margin: "2%"
  },
};
