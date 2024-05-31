import "./App.css";
import React,{useState} from "react";



function App() {
 
  
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setMessage]= useState('');


  //  Logic
let calcBmi = (e) => {
  e.preventDefault();

if(weight===0 || height === 0)
{
  alert('please enter a valid weight and height');
}
else 
{
 let bmi =(weight/(height*height)*703);
 setBmi(bmi.toFixed(1));


 if (bmi< 25)
 {
  setMessage('You are underweight')
 }
 else if (bmi>= 25 && bmi < 30)
 {
  setMessage ('You are a healthy weight')
 }
 else 
 {
  setMessage ('You are a overweight')
 }
}



}


// reload
let reload = () =>{
  window.location.reload();
}

  



  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculater</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight </label>
            <input
              type="text"
              placeholder="Enter weight Value"
              value={weight}
              onChange={ (e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height </label>
            <input
              type="text"
              placeholder="Enter Height Value"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="Submit">
              Submit
            </button>
            <button className="btn- btn-outline" onClick={reload} type="reload">
              Reload
            </button>
          </div>
          <div className="center">
            <h1>Your BMI is :{bmi}</h1>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
