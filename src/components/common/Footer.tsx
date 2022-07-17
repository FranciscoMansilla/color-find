import { useSelector } from 'react-redux'


const Footer = ()=>{
  const {colorPrimary, colorSecondary , colorTertiary } = useSelector((state:any)=>state)

  return(
    <div className="footer" style={{
      background: colorPrimary,
      color: colorSecondary
    }}>
      <h6>© Copyright 2022 by FranciscoMansilla</h6>
      <div>
        <a target="_blank" href="https://www.linkedin.com/in/franciscomansilla/" style={{
          color: colorSecondary
        }}>LinkedIn</a>
        <a target="_blank" href="https://github.com/FranciscoMansilla" style={{
          color: colorSecondary
        }}>GitHub</a>
      </div>
    </div>
  )
}
export default Footer