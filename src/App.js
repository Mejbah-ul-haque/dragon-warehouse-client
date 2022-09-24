import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Signup from "./Pages/Login/Signup/Signup";
import Blog from "./Pages/Blogs/Blog/Blog";
import Answer1 from "./Pages/Blogs/Answer1/Answer1";
import Answer2 from "./Pages/Blogs/Answer2/Answer2";
import Answer3 from "./Pages/Blogs/Answer3/Answer3";
import Answer4 from "./Pages/Blogs/Answer4/Answer4";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import AddItem from "./Pages/AddItem/AddItem";
import MyItems from "./Pages/MyItems/MyItems";
import ManageItems from "./Pages/ManageItems/ManageItems";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
	return (
		<div>
			<Header></Header>
      <Routes>
        <Route path='inventory/:id' element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>
        <Route path="addItem" element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path="myItems" element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path="manageItems" element={<RequireAuth><ManageItems></ManageItems></RequireAuth>}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="blog" element={<Blog></Blog>} />
        <Route path="inventories" element={<ManageInventories />} />
        <Route path='/answer1' element={<Answer1></Answer1>}></Route>
        <Route path='/answer2' element={<Answer2></Answer2>}></Route>
        <Route path='/answer3' element={<Answer3></Answer3>}></Route>
        <Route path='/answer4' element={<Answer4></Answer4>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
		</div>
	);
}

export default App;
