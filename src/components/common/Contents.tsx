import Button from "./Button"
import { useSelector } from 'react-redux';
import Card from "./Card";
import Toast from './Toast';

const Contents = ()=>{
  const {colorPrimary, colorSecondary , colorTertiary } = useSelector((state:any)=>state)
  return(
    <div className="contents">
      <svg style={{color: colorPrimary}} xmlns="http://www.w3.org/2000/svg" width="1920" height="590.688" viewBox="0 0 1920 590.688">
        <path xmlns="http://www.w3.org/2000/svg" id="Forma_1" data-name="Forma 1" d="M0,0H1920V464c-24.32-8.691-51.03-17.929-80-20-46.82-3.348-90.79,22.508-124,38-72.99,34.047-180.82,101.482-291,84-77.83-12.349-144.41-20.785-212-40-55.46-15.766-124.71-39.5-197-27-130.649,22.6-225.588,95.158-371,91C400.8,583.017,256.4,456.187,0,480V0Z"/>
      </svg>
      <div className="container">
        <div className="containerChild1">
          <h1 style={{color: colorSecondary}}>What is ColorFind?</h1>
          {/* <p>In ColorFind is a simple page and intuitive, you can try in real time a color palett </p> */}
          <p style={{color: colorSecondary}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, consequuntur rerum obcaecati aspernatur blanditiis perferendis ad molestiae ex iure cupiditate itaque, voluptate expedita ullam error commodi tenetur mollitia vero magnam?
          </p>
        </div>
        <div className="containerChild2">
          <Button/>
          <Card/>
          <Toast/>
        </div>
      </div>
    </div>
  )
}
export default Contents