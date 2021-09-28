import React from 'react';
import FilterBy from "./FilterBy";
import CardContainer from "./CardContainer";
import SortBy from './SortBy';
import SortByPopulation from './SortByPopulation';
import "../css/Container.css";
import "../css/filter.css";
import FilterByActivities from './FilterByActivities';

export function Container() {
  return (
    <header className="Container">
    <div>
        <div className="filter">
          <FilterBy />
        </div>

        <div className="filteractivities">
          <FilterByActivities />
        </div>
        
        <div className="alfab">
          Sort by alphabetical order:
          <SortBy type={"A-Z"} />
          <SortBy type={"Z-A"}/>
        </div>
        <div className="popu">
        Sort by alphabetical order:
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