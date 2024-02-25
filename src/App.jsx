import SideBar from "./components/SideBar/SideBar"
import TopBar from "./components/TopBar/TopBar"
import "./App.css";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductsList from "./pages/ProductsList/ProductsList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";

function App() {

  return (
    <BrowserRouter>
        <TopBar />
        <div className="container">
        <SideBar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="users" element={<UserList />} />
            <Route path="user/:userId" element={<User />} />
            <Route path="newUser" element={<NewUser />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="newProduct" element={<NewProduct />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
