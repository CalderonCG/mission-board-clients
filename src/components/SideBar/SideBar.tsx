import "./Sidebar.scss";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import {
  LuTimer,
  LuHandshake,
  LuClipboardList,
  LuUserRoundCheck,
  LuUsers,
  LuBookKey,
  LuPanelsTopLeft,
  LuSquareStack,
} from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";
import { useState } from "react";

function SideBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`sidebar ${open ? "openSidebar" : ""}`}>
      <div className="sidebar_header">
        <div className="sidebar_header_title">
          <LuTimer className="sidebar_header_icon" />
          <p>Resource Planning</p>
        </div>
        <TbLayoutSidebarLeftExpand
          onClick={() => setOpen(!open)}
          className="sidebar_header_expand"
        />
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
        <img src="/assets/cv.jpg" alt="" className="sidebar_user_avatar" />
        <p>Christopher Calderón</p>
      </div>
    </div>
  );
}

export default SideBar;
