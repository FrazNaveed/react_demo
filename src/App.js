import logo from './logo.svg';
import './App.css';


const MediaCard = (props) =>
{
return(
  <div>

    <h2>{props.title}</h2>
    <p>{props.body}</p>
    <div className="image"><img src= {props.imgsrc}/></div>
  </div>
)

}
const Gate = (isOpen)=>
{
  return isOpen ? <p>open</p> : <p>closed</p>;
}

function App() {
  return (
    <div>
   <MediaCard title = "Netflix" body="Movies" imgsrc = "https://wallpapercave.com/wp/wp7255190.jpg" />
   <Gate isOpen = "close"/>

    </div>
  );
}

export default App;
