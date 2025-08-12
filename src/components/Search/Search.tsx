import { CiSearch } from "react-icons/ci";
import './Search.scss'
import { useState } from "react";

function Search({handleSearch}:{handleSearch: (value:string)=>void}) {
  const [value, setvalue] = useState('');

  return (
    <div className="search">
      <input className="input" type="text" value={value} onChange={(e)=>{
        const newValue = e.target.value
        setvalue(newValue)
        handleSearch(newValue)
      }}/>
      <CiSearch className="icon"/>

    </div>
  );
}

export default Search;
