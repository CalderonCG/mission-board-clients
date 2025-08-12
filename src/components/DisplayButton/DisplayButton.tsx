import { TbAdjustmentsHorizontal } from "react-icons/tb";

function DisplayButton() {
  return (
    <button className="button">
      <div className="button_content">
        <TbAdjustmentsHorizontal className="button_icon" />

        <p>Display</p>
      </div>
    </button>
  );
}

export default DisplayButton;
