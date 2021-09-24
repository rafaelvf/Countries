import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Card from "./Card";
import {connect} from "react-redux";
import { getAll } from '../actions/actions';
import Paginado from './Paginado';


export function CardContainer(props) {//props = {country:state.country[],getcountries:function}
  useEffect(()=>{props.getcountries()},[])//con useEffect estamos cargando el estado porque set esta ejecunta elgetcountries que tiene adentro el dispatch la action getall
  
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage,setPostsPerPage]=useState(9);

  const [pageNumberLimit,setpageNumberLimit]=useState(5);//cuantas numeros de pagina queremos display
  const [maxPageNumberLimit,setmaxPageNumberLimit]=useState(5);
  const [minPageNumberLimit,setminPageNumberLimit]=useState(0);  


  const indexOfLastPost= currentPage*postsPerPage;
  const indexOfFirstPost=indexOfLastPost-postsPerPage;
  const currentPosts=props.country.slice(indexOfFirstPost,indexOfLastPost)

  const paginate =(pageNumber)=>setCurrentPage(pageNumber)
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

  return (
    <div>
    {
    <Paginado postsPerPage={postsPerPage} totalPosts={props.country.length} paginate={paginate} minPageNumberLimit={minPageNumberLimit}  maxPageNumberLimit={maxPageNumberLimit}
    handleNextbtn={handleNextbtn} handlePrevbtn={handlePrevbtn}
    currentPage={currentPage}/>
    }

    <div className="cardcontainer">
    
  { currentPosts.map(i=>{

    
      return (
        <div key={i.ID}> {/* para que cada card tenga una id en el navegador, y no moeleste la consola del navegador */}
          <Link to={`/countries/${i.ID}`}>
          <Card country={i.name} flag={i.flag} continent={i.continent} />
          </Link>
        </div> 
      )
      
    })}
    
    </div>
    </div>
  )
};


function mapStateToProps(state){
  return{
      country:state.allCountries.countries//country se guarda lo que necesito del state del store
  }
}
function mapDispatchToProps(dispatch){

  return{getcountries:()=>dispatch(getAll())}
}

export default connect(mapStateToProps,mapDispatchToProps)(CardContainer);