import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Family from "./pages/FamilyPage";
import ExecutiveHealth from "./pages/ExecutiveHealth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/family" element={<Family />} />
      <Route
        path="/executive-health"
        element={<ExecutiveHealth />}
      />
    </Routes>
  );
}

export default App;