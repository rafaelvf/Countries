import React from 'react';
import Paginado from './Paginado';
import CardContainer from "./CardContainer";

export function Container() {
  return (
    <header className="Container">
    <div>
        <div>
            <Paginado />
        </div>

        <div>
            <CardContainer />
        </div>



    </div>
    </header>
  )
};

export default Container;