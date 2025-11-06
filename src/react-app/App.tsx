import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import HomeLayout1 from "@/react-app/pages/HomeLayout1";
import HomeLayout2 from "@/react-app/pages/HomeLayout2";
import HomeLayout3 from "@/react-app/pages/HomeLayout3";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/layout1" element={<HomeLayout1 />} />
        <Route path="/layout2" element={<HomeLayout2 />} />
        <Route path="/layout3" element={<HomeLayout3 />} />
      </Routes>
    </Router>
  );
}
