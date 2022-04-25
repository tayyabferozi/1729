import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Blogs />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
