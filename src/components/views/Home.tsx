import { useSelector } from "react-redux"
import ButtonContainer from "../common/ButtonContainer"
import Contents from "../common/Contents"
import Footer from "../common/Footer"
import NavBar from "../common/NavBar"

const Home = ()=>{
  const {colorPrimary, colorSecondary , colorTertiary } = useSelector((state:any)=>state)
  return(
    <div className="home" 
      style={{background: colorTertiary}}
    >
      <NavBar/>
      <Contents/>
      <ButtonContainer/>
      <Footer/>
    </div>
  )
}

export default Home