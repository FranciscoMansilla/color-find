import { useSelector } from "react-redux"

const Button = ()=>{
  const {colorPrimary, colorSecondary , colorTertiary } = useSelector((state:any)=>state)
  return(
    <div className="button" style={{
        border: "2px solid "+colorSecondary,
        background: colorTertiary,
        color: colorSecondary
      }}>
      A Button 
    </div>
  )
} 
export default Button