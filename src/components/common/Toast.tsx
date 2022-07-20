import { useSelector } from "react-redux"


const Toast = ()=>{
  const {colorPrimary, colorSecondary , colorTertiary } = useSelector((state:any)=>state)

  return(
    <div className="toast shadow" style={{
      border: "2px solid "+colorSecondary,
      color: colorSecondary,
    }}>
      <div style={{
        background: colorTertiary,
        border: '2px solid ' + colorTertiary,
      }}>
        <h4>ColorFind Message</h4>
        <p>
          15 mins ago
          <button>&#x2715;</button>
        </p>
      </div>
      <div>
        Hello, world! This is a toast message.
      </div>
    </div>
  )
}
export default Toast
