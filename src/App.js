import "./App.css";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import AboutPage from "./components/AboutPage";
import Cart from './components/Cart'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <AboutPage/> */}
        <Routes>
          <Route path={"/"} element={<ProductList />} />
          <Route path={"/product/:productId"} element={<ProductDetails />} />
          <Route path={"/productcomponent"} element={<ProductList />} />
          <Route path={"/aboutPage"} element={<AboutPage />} />
          <Route path={"/contactUs"} element={<ContactUs/>} />
          <Route path={"/cart"} element={<Cart/>}/>

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
