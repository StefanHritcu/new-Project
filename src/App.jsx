import Fruits from "./Web-Site/Fruits/Fruits";
import Header from "./Web-Site/Header/Header";
import { Routes, Route, Outlet } from "react-router-dom";
import Vegetables from "./Web-Site/Vegetables/Vegetables";
import Home from "./Web-Site/Homee/Home";
import Window from "./Web-Site/WindowProduct/Window";
import SeeMore from "./Web-Site/SeeMore/SeeMore";
import About from "./Web-Site/About/About";
import CartShop from "./Web-Site/CartoShop/CartShop";
import Pay from "./Web-Site/PaySystem/Pay"
import PayCart from "./Web-Site/PaySystem/PayCart";
import PayPayPal from "./Web-Site/PaySystem/PayPayPal";
import PayLater from "./Web-Site/PaySystem/PayLater";
import PayinThirtyDay from "./Web-Site/PaySystem/PayInThirtyDay";
import Login from "./Web-Site/Login/Login";
import Orders from "./Web-Site/Orders/Orders";


function App() {

  return (
    <>
      <Header/>
      <Window/>
      
      <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Outlet />
              </>
            }
          />
          <Route path="fruits" element={<Fruits />} />
          <Route path="vegetables" element={<Vegetables />} />
          <Route path="seemore" element={<SeeMore />} />
          <Route path="about" element={<About />} />
          <Route path="cartshop" element={<CartShop />} />
          <Route path="pay" element={<Pay />} />
          <Route path="paycart" element={<PayCart />} />
          <Route path="paypaypal" element={<PayPayPal />} />
          <Route path="paylater" element={<PayLater />} />
          <Route path="payinthirtyday" element={<PayinThirtyDay />} />
          <Route path="login" element={<Login />} />
          <Route path="orders" element={<Orders/>} />
        </Routes>

    </>
  );
}

export default App;
