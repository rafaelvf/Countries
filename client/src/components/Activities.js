import React from 'react';
import { Link } from 'react-router-dom';

export function activitiesForm() {
  return (
    <header className="navbar">
      <h1>Create an Activity!</h1>
      <div>
      <form>
      
      <input placeholder="Activity name..."></input><br/>

      <label>Select Difficulty</label>
            <select >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select><br/>

      <input placeholder="Activity duration in hours"></input><br/>

      <label>Season</label>
            <select >
                <option value="winter">winter</option>
                <option value="summer">summer</option>
                <option value="spring">spring</option>
                <option value="fall">fall</option>
              
            </select><br/>
      <button className="activityButton" type="submit">Create</button>
      </form>
      </div>    
    </header>
  )
};

export default activitiesForm;