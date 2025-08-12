import "./FilterButton.scss";
import { MdFilterList } from "react-icons/md";

function FilterButton() {
  return (
    <button className="button">
      <MdFilterList className="button_icon" />
      <p>Filter</p>
    </button>
  );
}

export default FilterButton;
