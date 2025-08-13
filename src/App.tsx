import { Suspense } from "react";
import "./App.scss";
import Clients from "./pages/Clients";
import Loader from "./components/Loader/Loader";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="layout">
      <SideBar/>
      <Suspense fallback={<Loader />}>
        <Clients />
      </Suspense>
    </div>
  );
}

export default App;
