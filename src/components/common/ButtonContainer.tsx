import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import * as actionCreator from '../../redux/actions/actions'

const ButtonContainer = ()=>{
  const dispatch = useDispatch()
  const {
    changeColorPrimary, 
    changeColorSecondary, 
    changeColorTertiary
  } = bindActionCreators(actionCreator,dispatch)
  const state = useSelector((state:any)=>state) 
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value)
    switch (e.target.name) {
      case '1':
        changeColorPrimary(e.target.value)
        return
      case '2':
        changeColorSecondary(e.target.value)
        return
      case '3':
        changeColorTertiary(e.target.value)
        return
      default:
        return
    }
  }

  return(
    <div className="ButtonContainer">
      <div className="buttonBlock">
        <h3>Primary Color</h3>
        <input onChange={handleChange} type="color" name="1" value={state.colorPrimary}/>
        <label>
        {state.colorPrimary}
          <img src="" alt="" />
        </label>
      </div>
      <div className="buttonBlock">
        <h3>Secondary Color</h3>
        <input onChange={handleChange} type="color" name="2" value={state.colorSecondary}/>
        <label>
        {state.colorSecondary}
          <img src="" alt="" />
        </label>
      </div>
      <div className="buttonBlock">
        <h3>Tertiary Color</h3>
        <input onChange={handleChange} type="color" name="3" value={state.colorTertiary}/>
        <label>
        {state.colorTertiary}
          <img src="" alt="" />
        </label>
      </div>
    </div>
  )
}
export default ButtonContainer