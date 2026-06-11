import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Family from "./pages/FamilyPage";
import ExecutiveHealth from "./pages/ExecutiveHealth";
import ConsultationEthiopia from "./pages/ConsultationEthiopia";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/family" element={<Family />} />
      <Route path="/executive-health" element={<ExecutiveHealth />} />
      <Route path="/consultation-ethiopia" element={<ConsultationEthiopia />} />
    </Routes>
  );
}

export default App;