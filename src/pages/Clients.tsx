import Search from "../components/Search/Search";

import { IoAddOutline } from "react-icons/io5";
import "./Client.scss";
import FilterButton from "../components/FilterButton/FilterButton";
import DisplayButton from "../components/DisplayButton/DisplayButton";

function Clients() {
  return (
    <div className="clients">
      <div className="header">
        <h1>Clients</h1>
        <div className="header_controls">
          <Search />
          <button className="header_add">
            <IoAddOutline className="header_add_icon" />
          </button>
        </div>
      </div>

      <div className="filters">
        <FilterButton />
        <DisplayButton />
      </div>

      <div className="list">
        <p>Total 72 rows</p>
      </div>

      <div className="pages">
        <p>Total 72 rows</p>
      </div>
    </div>
  );
}

export default Clients;
