import MBTIResult from "./screens/MBTIResult";
import MBTITest from "./screens/mbtiTest";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Welcome from "./screens/welcome";

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/test" element={<MBTITest />} />
          <Route path="/result" element={<MBTIResult />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
