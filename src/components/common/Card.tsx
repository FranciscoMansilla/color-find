import { useSelector } from 'react-redux'
import img from '../../assets/img1.png'


const Card = ()=>{
  const {colorPrimary, colorSecondary , colorTertiary } = useSelector((state:any)=>state)
  return(
    <div className="card" style={{
      border: "2px solid "+colorSecondary,
      color: colorSecondary,
    }}>
      <img src={img} alt="img1" />
      <div>
        <h3>Hurón Albino</h3>
        <p>Su color o ausencia de color no es más que un aspecto físico y no condiciona su estado emocional ni su carácter.</p>
      </div>
    </div>
  )
}
export default Card