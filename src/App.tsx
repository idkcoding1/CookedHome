
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from "./pages/CheckOut";
import { OrderProvider } from "./context/OrderContext";
import HomePage from "./pages/Home";
import ReceiptPage from "./pages/Receipt";

function App() {
  return (
    <OrderProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
     
      </Routes>
    </BrowserRouter>
    </OrderProvider>
  );
}

export default App;
