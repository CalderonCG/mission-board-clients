import { useState } from "react";
import "./FilterButton.scss";
import { MdFilterList } from "react-icons/md";

function FilterButton({
  handleChange,
}: {
  handleChange: (value: "All" | "Archived" | "Active" | "Prospective") => void;
}) {
  const [show, setShow] = useState(false);

  return (
    <button className="button" onClick={() => setShow(!show)}>
      <div className="button_content">
        <MdFilterList className="button_icon" />
        <p>Filter</p>
      </div>
      <div className={`selection ${show ? "open" : ""}`}>
        <button onClick={() => handleChange("All")}>All</button>
        <button onClick={() => handleChange("Active")}>Active</button>
        <button onClick={() => handleChange("Prospective")}>Prospective</button>
        <button onClick={() => handleChange("Archived")}>Archived</button>
      </div>
    </button>
  );
}

export default FilterButton;
