import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import * as actionCreator from '../../redux/actions/actions'
import copy from '../../assets/copy.png'

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
  const {colorPrimary, colorSecondary , colorTertiary } = useSelector((state:any)=>state)
  const handleCopy = (e:any)=>{
    if(e.target.name==='1'){
      console.log('copy1')
      navigator.clipboard.writeText(colorPrimary)
    }
    if(e.target.name==='2'){
      console.log('copy2')
      navigator.clipboard.writeText(colorSecondary)
    }
    if(e.target.name==='3'){
      console.log('copy3')
      navigator.clipboard.writeText(colorTertiary)

    }
  }
  return(
    <div className="ButtonContainer" style={{
      color: colorSecondary
    }}>
      <div className="buttonBlock">
        <h3>Primary Color</h3>
        <input className="shadow" onChange={handleChange} type="color" name="1" value={state.colorPrimary}/>
        <div>
          {state.colorPrimary}
          <button name="1" onClick={handleCopy}>
            <img src={copy} alt="" />
          </button>
        </div>
      </div>
      <div className="buttonBlock">
        <h3>Secondary Color</h3>
        <input className="shadow" onChange={handleChange} type="color" name="2" value={state.colorSecondary}/>
        <div>
          {state.colorSecondary}
          <button name="2" onClick={handleCopy}>
            <img src={copy} alt="" />
          </button>
        </div>
      </div>
      <div className="buttonBlock">
        <h3>Tertiary Color</h3>
        <input className="shadow" onChange={handleChange} type="color" name="3" value={state.colorTertiary}/>
        <div>
          {state.colorTertiary}
          <button name="3" onClick={handleCopy}>
            <img src={copy} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default ButtonContainer