import Home from "./components/Home";
import AddtoCart from "./components/AddtoCart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<AddtoCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
