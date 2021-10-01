import React,{useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";
import "../css/Activities.css";

export function ActivitiesForm() {
  const {everyCountry}=useSelector((state)=>state.allCountries)//me traigo el estado general
  const [state,setState]=useState({name:"",dificulty:"",duration:"",season:"",countries:[]})//creo estado por las cosas que necesito
  const [error,setError]=useState({name:"",dificulty:"",duration:"",season:"",countries:[]})

  function validation(event){
    if(event.target.name==="name" || event.target.name==="duration"){
      if(!event.target.value.length){
        setError({
          ...error,
          [event.target.name]:"You need to fill the form"
        })
      }else{
        setError({
          ...error,
          [event.target.name]:""
        })
      }
    }
    else {
      if(!event.target.value.length){
        setError({
          ...error,
          [event.target.name]:"You need to select "
        })
      }else{
        setError({
          ...error,
          [event.target.name]:[]
        })
      }
      }
    }
  

  console.log(state)

  function handleInputChange(event){
    validation(event);
    setState({...state,[event.target.name]:event.target.value})
  }

  function handleChange(event){
    
    setState({...state,[event.target.name]:[...state.countries,event.target.value]})
  }


  async function handleSubmit(i){
    i.preventDefault();
    
    if(!state.name || !state.dificulty || !state.duration || !state.season || !state.countries.length){
      alert("You have to fill everything, make sure to select a country")
    }else{
    let res= await axios.post("http://localhost:3001/activity",state)
    alert("Your activity has been created!")
    
    console.log(res.data)
    }
  }

  function handleErase(event){
    event.preventDefault();
    setState({...state,
      countries:[]})
  }

  return (
    <header className="activities">
      <div className="act">
      <h2>Create an Activity!</h2>
      <div>
      <form onSubmit={(i)=>handleSubmit(i)}>
      
      <p className="titulos">ACTIVITY NAME</p>
      <input className="actt"  placeholder="Activity name..." name="name" value={state.name} onChange={handleInputChange}></input><br/>
      {error.name && (<p className="error">{error.name}</p>)}

      <p className="tituloss">SELECT DIFFICULTY</p>
            <select onChange={handleInputChange} name="dificulty" className="dif" >
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select><br/>
            {error.dificulty && (<p className="error">{error.dificulty}</p>)}

      <p className="titulosss">DURATION IN HOURS</p>
      <input className="diff" placeholder="Activity duration in hours" name="duration" value={state.duration} onChange={handleInputChange}></input><br/>
      {error.duration && (<p className="error">{error.duration}</p>)}

            <p className="titulossss">SEASON</p>
            <select onChange={handleInputChange} name="season" className="difff">
                <option value=""></option>
                <option value="winter">winter</option>
                <option value="summer">summer</option>
                <option value="spring">spring</option>
                <option value="fall">fall</option>              
            </select><br/>
            {error.season && (<p className="error">{error.season}</p>)}

              <br/>
            <p className="titulosssss">SELECT COUNTRIES</p>   
            <select onChange={handleChange} name="countries" multiple className="diffff">
              <option value=""></option>
            {everyCountry.map(i=>(
              <option value={i.name}>{i.name}</option>))}
              </select><br/>

              <p className="titulossssss">COUNTRIES SELECTED</p> 
              {state.countries.map(i=>
              <p>{i}</p>
              )}
              
            {/* <p>
            Countries selected:{arraySelected.map(i=>arraySelected[i])}  
            </p> */}
      <button onClick={handleErase}>Erase countries</button>
      <button className="activityButton" type="submit">Create</button>
      </form>
      </div>   
      </div> 
    </header>
  )
};

export default ActivitiesForm;