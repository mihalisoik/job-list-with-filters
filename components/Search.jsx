import React from "react"
import { filters } from "../src/data.jsx"
import {Filter} from "./Filter.jsx"

export default function Search(props) {

  function toggleSearch() {
    setIsOpen(prevOption => !prevOption)
  }

  const [isOpen,setIsOpen] = React.useState(false)

  const filterElements = filters.map(filter => {
    return <Filter 
    filter={filter}
    refreshPage={props.refreshPage}
    />
  })

  return (

    !isOpen 
    ? 
    (<button onClick = {toggleSearch} className="search-button-closed">
      <img className="search-icon" src="../public/filter.png"/>
    </button>) 
    :
    ( <div className="filter-bar">
        <button onClick = {toggleSearch} className="search-button-opened">
         <img className="search-icon" src="../public/filter.png"/>
        </button>
        <div className="filters">
          {filterElements}
        </div>  
      </div>)
  ) 
}