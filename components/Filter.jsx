import React from "react"
import { filters } from "../src/data.jsx"

export let filtersOfUser = []

export function Filter(props) {
  const [isClicked,setIsClicked] = React.useState(false)

  function handleClick(selectedFilter) {
    setIsClicked(prev => !prev)
    filters.forEach(filter => {
      if (selectedFilter === filter) {
        if (filtersOfUser.includes(filter)) {
          const index = filtersOfUser.indexOf(filter)
          filtersOfUser.splice(index,1)
        } else {
          filtersOfUser.push(filter)
        }
      }
    })
    }

  return (
      <div
      onClick={() => {
        handleClick(props.filter)
        props.refreshPage()
      }}
      className="filter-container">
        {props.filter}
        {filtersOfUser.includes(props.filter) && <div 
        className="filter-cancel-button"
        >
          <div>
            &#128473;
          </div>
        </div> }
      </div>
  )
}