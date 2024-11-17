import { UseState } from "./hooks";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/state" element={<UseState />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
