import { CiSearch } from "react-icons/ci";
import './Search.scss'

function Search() {
  return (
    <div className="search">
      <input className="input" type="text" />
      <CiSearch className="icon"/>

    </div>
  );
}

export default Search;
