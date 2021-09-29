import React,{useState} from 'react';

import {useSelector} from "react-redux";
import axios from "axios";


export function ActivitiesForm() {
  const {everyCountry}=useSelector((state)=>state.allCountries)
  const [state,setState]=useState({name:"",dificulty:"",duration:"",season:"",countries:[]})


  // const arraySelected=[]
  // function selected(e){
  //   arraySelected.push(e.target.value)
  // }
  console.log(state)
  function handleInputChange(event){
    setState({...state,[event.target.name]:event.target.value})
  }
  function handleChange(event){
    setState({...state,[event.target.name]:[...state.countries,event.target.value]})
  }


  async function handleSubmit(i){
    i.preventDefault();
    let res= await axios.post("http://localhost:3001/activity",state)
    alert("Tu actividad ha sido creada con exito!")
    
    console.log(res.data)
  }

  return (
    <header className="navbar">
      <h1>Create an Activity!</h1>
      <div>
      <form onSubmit={(i)=>handleSubmit(i)}>
      
      <input placeholder="Activity name..." name="name" value={state.name} onChange={handleInputChange}></input><br/>

      <label>Select Difficulty</label>
            <select onChange={handleInputChange} name="dificulty"  >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select><br/>

      <input placeholder="Activity duration in hours" name="duration" value={state.duration} onChange={handleInputChange}></input><br/>

      <label>Season</label>
            <select onChange={handleInputChange} name="season">
                <option value="winter">winter</option>
                <option value="summer">summer</option>
                <option value="spring">spring</option>
                <option value="fall">fall</option>
              
            </select><br/>
            <label>Select countries</label>
            
              <select onChange={handleChange} name="countries" multiple>
            {everyCountry.map(i=>(
              <option value={i.name}>{i.name}</option>))}
              </select><br/>
            
            {/* <p>
            Countries selected:{arraySelected.map(i=>arraySelected[i])}  
            </p> */}

      <button className="activityButton" type="submit">Create</button>
      </form>
      </div>    
    </header>
  )
};

export default ActivitiesForm;