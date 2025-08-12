import "./Sidebar.scss";
import {
  LuTimer,
  LuHandshake,
  LuClipboardList,
  LuUserRoundCheck,
  LuUsers,
  LuBookKey,
  LuPanelsTopLeft,
  LuSquareStack,
  LuBook,
  LuUser,
} from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <LuTimer className="sidebar_header_icon" />
        <p>Resource Planning</p>
      </div>

      <div className="sidebar_list">
        <button>
          <FaChartLine />
          <p>Timeline</p>
        </button>
        <button>
          <LuPanelsTopLeft />
          <p>Dashboard</p>
        </button>
        <button>
          <LuHandshake />
          <p>Clients</p>
        </button>

        <button>
          <LuClipboardList />
          <p>Projects</p>
        </button>
        <button>
          <LuUserRoundCheck />
          <p>Assignments</p>
        </button>
        <button>
          <LuUsers />
          <p>Team Members</p>
        </button>
        <button>
          <LuBookKey />
          <p>Team</p>
        </button>
        <button>
          <LuSquareStack />
          <p>Groups</p>
        </button>
      </div>

      <div className="sidebar_user">
        <LuUser/>
        <p>Christopher Calderón</p>
      </div>
    </div>
  );
}

export default SideBar;
