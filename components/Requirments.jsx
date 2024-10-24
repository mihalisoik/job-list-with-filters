import { data } from "../src/data.jsx";

export default function Requirments(props) {

  const requirmentsElements = props.text.map((info,index) => {
    return (
    <div className="requirments" key={index}>
      {info}
    </div>)
  })

  return (
    <div className="job-requirments">
      {requirmentsElements}
    </div>
  )
}