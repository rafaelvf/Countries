import React from 'react';

import FilterBy from "./FilterBy";
import CardContainer from "./CardContainer";
import SortBy from './SortBy';
import SortByPopulation from './SortByPopulation';

export function Container() {
  return (
    <header className="Container">
    <div>
        <div className="filter">
          <FilterBy />
        </div>
        <div>
          <SortBy type={"A-Z"} />
          <SortBy type={"Z-A"}/>
        </div>
        <div>
          <SortByPopulation population={"ASC"} />
          <SortByPopulation population={"DSC"}/>
        </div>

        <div>
            <CardContainer />
        </div>



    </div>
    </header>
  )
};

export default Container;