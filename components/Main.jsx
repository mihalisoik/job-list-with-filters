import { data } from "../src/data.jsx"
import Requirments from "./Requirments.jsx"
import { filtersOfUser } from "./Filter.jsx"


export default function Main(props) {
  

  return (
      <div 
      className="job-container">
        <img src = {`${props.img}`}/>
        <div className="job-info-container">
          <div className="name-container">
            <div className="job-name">
              {props.name}
            </div>
            {props.date < 4 && props.period==="d" 
            ?<div className="is-new">NEW!</div> 
            : ''}
          </div>
          <div className="job-title">
            {props.title}
          </div>
          <div className="job-info">
            {props.date}{props.period} ago&nbsp;&nbsp;&nbsp;&#183;&nbsp;&nbsp;&nbsp;{props.contract}&nbsp;&nbsp;&nbsp;&#183;&nbsp;&nbsp;&nbsp;{props.location}
          </div>
        </div>
          <Requirments text={props.requirments}/>
      </div>
  )
}