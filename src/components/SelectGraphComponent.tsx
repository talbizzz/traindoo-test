import React from 'react'
import GraphComponent from "./GraphComponent";
import './styles.css'

export default ({data, onClick, graphNo}) => {

  const sections = [
    {title: "weight"},
    {title: "caloriesAvg"},
    {title: "fatsAvg"},
    {title: "carbsAvg"},
  ]

  return(
    <div className={'select-graph-container'}>
      <GraphComponent data={data}/>
      <div className='button-container'>
        {sections.map( (section, index) =>
          <button id={`${section.title}${index}`} title={section.title} onClick={() => onClick(graphNo, section.title)}>{section.title}</button>
        )}
      </div>
    </div>
  )
}