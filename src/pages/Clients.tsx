import Search from "../components/Search/Search";

import { IoAddOutline } from "react-icons/io5";
import "./Client.scss";
import FilterButton from "../components/FilterButton/FilterButton";
import DisplayButton from "../components/DisplayButton/DisplayButton";
import { ClientList } from "../components/ClientList/ClientList";
import { useState } from "react";

function Clients() {

  const [filter, setFilter] = useState<'All'|'Archived'|'Active'|'Prospective'>('All');
  const [search, setSearch] = useState<string>('')


  return (
    <div className="clients">
      <div className="header">
        <h1>Clients</h1>
        <div className="header_controls">
          <Search handleSearch={(value:string)=>setSearch(value)} />
          <button className="header_add">
            <IoAddOutline className="header_add_icon" />
          </button>
        </div>
      </div>

      <div className="filters">
        <FilterButton handleChange={(value: 'All'|'Archived'|'Active'|'Prospective')=>setFilter(value)}/>
        <DisplayButton />
      </div>
        <ClientList filter={filter} search={search}/>


      <div className="pages">
        <p>Total 72 rows</p>
      </div>
    </div>
  );
}

export default Clients;
