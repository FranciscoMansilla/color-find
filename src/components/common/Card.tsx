import img from '../../assets/img1.png'

const Card = ()=>{
  return(
    <div className="card">
      <img src={img} alt="img1" />
      <div>
        <h3>Hurón Albino</h3>
        <p>Su color o ausencia de color no es más que un aspecto físico y no condiciona su estado emocional ni su carácter.</p>
      </div>
    </div>
  )
}
export default Card