import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Card from "./Card";
import {connect,useSelector} from "react-redux";
import { getAll } from '../actions/actions';
import Paginado from './Paginado';
import "../css/CardContainer.css"


export function CardContainer(props) {//props = {country:state.country[],getcountries:function}
  useEffect(()=>{props.getcountries()},[props])//con useEffect estamos cargando el estado porque set esta ejecunta elgetcountries que tiene adentro el dispatch la action getall
  
  const {countries}=useSelector((state)=>state.allCountries)

  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage]=useState(9);

  const [pageNumberLimit]=useState(9);//cuantas numeros de pagina queremos display
  const [maxPageNumberLimit,setmaxPageNumberLimit]=useState(9);
  const [minPageNumberLimit,setminPageNumberLimit]=useState(0);  


  const indexOfLastPost= currentPage*postsPerPage;
  const indexOfFirstPost=indexOfLastPost-postsPerPage;
  const currentPosts=countries.slice(indexOfFirstPost,indexOfLastPost)

  const paginate =(pageNumber)=>setCurrentPage(pageNumber)
  console.log("conosloeee log",paginate)
  const handleNextbtn=()=>{
    setCurrentPage(currentPage+1);

    if(currentPage+1>maxPageNumberLimit){
      setmaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit+pageNumberLimit);
    }
  }

  const handlePrevbtn = ()=>{
    setCurrentPage(currentPage-1);

    if((currentPage-1)% pageNumberLimit===0){
      setmaxPageNumberLimit(maxPageNumberLimit-pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit-pageNumberLimit);
    }
  }

  console.log("current post"+ currentPosts)//9 cartas

  return currentPosts && currentPosts.length ?(
    <div>
    {/* {
    <Paginado postsPerPage={postsPerPage} totalPosts={countries.length} paginate={paginate} minPageNumberLimit={minPageNumberLimit}  maxPageNumberLimit={maxPageNumberLimit}
    handleNextbtn={handleNextbtn} handlePrevbtn={handlePrevbtn}
    currentPage={currentPage}/>
    } */}

    <div className="cardcontainer">
    
  { currentPosts.map(i=>{
    console.log("f"+currentPosts)
    
      return (
        <div key={i.ID} className="j"> {/* para que cada card tenga una id en el navegador, y no moeleste la consola del navegador */}
          <Link to={`/countries/${i.ID}`}>
          <Card country={i.name} flag={i.flag} continent={i.continent} />
          </Link>
        </div> 
      )
      
    })}
    
    </div>
    {
    <Paginado postsPerPage={postsPerPage} totalPosts={countries.length} paginate={paginate} minPageNumberLimit={minPageNumberLimit}  maxPageNumberLimit={maxPageNumberLimit}
    handleNextbtn={handleNextbtn} handlePrevbtn={handlePrevbtn}
    currentPage={currentPage}/>
    }
    </div>
  ):<p>The country does not exist!</p>
};


// function mapStateToProps(state){
//   return{
//       country:state.allCountries.countries,//country se guarda lo que necesito del state del store
      
//   }
// }
function mapDispatchToProps(dispatch){

  return{getcountries:()=>dispatch(getAll())}
}

export default connect(null,mapDispatchToProps)(CardContainer);