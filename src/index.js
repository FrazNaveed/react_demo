import react, {useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'


function Room()
{
   
    const state = {
        isLit: true,
        temperature: 22
        
    }

    var flipLight = () => {
        setState({isLit: !state.isLit})
      }

     var turnOn = () => {
        state.isLit ? null: this.setState({isLit: !state.isLit});
      }

     var turnOff = () => {
        state.isLit ? setState({isLit: !state.isLit}): null;
      }
     var tempInc = () => {
        this.setState({
          temperature: this.state.temperature + 1
        });
      };
      var tempDec = () => {
        this.setState({
          temperature: this.state.temperature - 1
        });
      };

    const[isLit, temperature] = this.state;
    const brightness = isLit ? 'lit' : 'dark';

return(
<div className={`room ${brightness}`}>

this room is {isLit ? 'lit' : 'dark'}

<button onClick={()=>setLit(!isLit)}>
    flip
</button>

<button onClick={turnOn} >ON</button>

<button onClick={turnOff}>OFF</button>
<p>Room temperature is: {temperature}</p>
<br/>
<button onClick={tempInc}>+</button>
<button onClick={tempDec}>-</button>

</div>
);
}
ReactDOM.render(<Room/>, document.getElementById('root'));