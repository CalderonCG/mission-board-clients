import Search from "../components/Search/Search";

import { IoAddOutline } from "react-icons/io5";
import "./Client.scss";

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

      <div className="header">
        <h1>Clients</h1>
        <div className="header_controls">
          <Search />
          <button className="header_add">
            <IoAddOutline className="header_add_icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Clients;
