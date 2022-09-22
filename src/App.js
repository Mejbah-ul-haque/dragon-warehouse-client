import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
	return (
		<div>
			<Header></Header>
      <Routes>
      <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        
      </Routes>
      <Footer></Footer>
		</div>
	);
}

export default App;
