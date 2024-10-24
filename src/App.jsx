import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Search from '../components/Search'
import {data, filters} from './data.jsx'
import { filtersOfUser } from '../components/Filter.jsx'

function App() {
  
  const [refresh,setRefresh] = React.useState(true)

  function refreshPage() {
    setRefresh(prev => !prev)
   
  }
  
  const filteredData = data.filter(info=> {
    return filtersOfUser.every(filter => info.requirments.includes(filter))
  })

  const jobElements = filteredData.length > 0
  ?filteredData.map(info => {
    
      return (
        <Main 
          key={info.id}
          img={info.img}
          name={info.name}
          title={info.title}
          date={info.info.date.value}
          period={info.info.date.period}
          contract={info.info.contract}
          location={info.info.location}
          requirments={info.requirments}      
      />
      )
  })
  :
  <div className="no-job-container">Oops no jobs match your filters.</div>

  return (
    <div>
      <Header />
      <Search refreshPage={refreshPage}/>
      {jobElements}
    </div>
  )
}

export default App