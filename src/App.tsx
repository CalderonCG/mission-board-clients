import { Suspense } from "react";
import "./App.scss";
import Clients from "./pages/Clients";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <div className="layout">
      <Suspense fallback={<Loader />}>
        <Clients />
      </Suspense>
    </div>
  );
}

export default App;
