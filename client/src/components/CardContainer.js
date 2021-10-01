import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { connect, useSelector } from "react-redux";
import { getAll } from "../actions/actions";
import Paginado from "./Paginado";
import "../css/CardContainer.css";

export function CardContainer(props) {
  //props = {country:state.country[],getcountries:function}
  useEffect(() => {
    props.getcountries();
  }, [props]); //con useEffect estamos cargando el estado porque set esta ejecunta elgetcountries que tiene adentro el dispatch la action getall

  const { countries } = useSelector((state) => state.allCountries);

  const [currentPage, setCurrentPage] = useState(1); //pagina actual
  const [postsPerPage] = useState(9); //cuantas cartas desplegamos por pagina

  const [pageNumberLimit] = useState(9); //limite de numeros que queremos ver en el paginado
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(9); //maximo de numeros que queremos ver en el paginado
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0); //minimo de numeros que queremos vern el paginado

  const indexOfLastPost = currentPage * postsPerPage; //pagina actual * numero de cartas por pagina--9*5=45
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //index de laultiam pagina - cuantos post per page hay-[45-9]
  const currentPosts = countries.slice(indexOfFirstPost, indexOfLastPost); //aqui hacemos la division slice para tener los posts por pagina.

  const paginate = (pageNumber) => setCurrentPage(pageNumber); //esta es una funcion que recibe un numero y cambia el estado de current page a ese numero.

  const handleNextbtn = () => {
    //esta es una funcion que cambia el estado de current page +1 para avanazar una pagina.
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {//para cambiar los numero que enseña. se despalza
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    //funcion pra el boton de retroceder
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  console.log("current post" + currentPosts); //9 cartas

  return currentPosts && currentPosts.length ? (
    <div>
      

      <div className="cardcontainer">
        {currentPosts.map((i) => {
          console.log("f" + currentPosts);

          return (
            <div key={i.ID} className="j">
              {" "}
              {/* para que cada card tenga una id en el navegador, y no moeleste la consola del navegador */}
              <Link to={`/countries/${i.ID}`}>
                <Card country={i.name} flag={i.flag} continent={i.continent} />
              </Link>
            </div>
          );
        })}
      </div>
      {
        <Paginado
          postsPerPage={postsPerPage}
          totalPosts={countries.length}
          paginate={paginate}
          minPageNumberLimit={minPageNumberLimit}
          maxPageNumberLimit={maxPageNumberLimit}
          handleNextbtn={handleNextbtn}
          handlePrevbtn={handlePrevbtn}
          currentPage={currentPage}
        />
      }
    </div>
  ) : (
    <p>The country does not exist!</p>
  );
}

function mapDispatchToProps(dispatch) {
  return { getcountries: () => dispatch(getAll()) };
}

export default connect(null, mapDispatchToProps)(CardContainer);
