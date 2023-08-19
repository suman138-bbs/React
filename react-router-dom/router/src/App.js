import React,{lazy,Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OrderSummery from "./components/OrderSummery";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import NewProducts from "./components/NewProducts";
import FeaturedProducts from "./components/FeaturedProducts";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
const LazyAbout  = lazy(()=>import('./components/About'))
const App = () => {
  return(
    <div>
    <Navbar/>  
      <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><LazyAbout/></Suspense>} />
        <Route path="/order-summery" element={<OrderSummery />} />
        <Route path="products" element={<Products />}>
          <Route index element = {<FeaturedProducts/>}/>
          <Route  path="new" element = {<NewProducts/>}/>
          <Route path="featured" element = {<FeaturedProducts/>}/>
        </Route>
        <Route path="users" element={<User />}>
          <Route path=":userId" element = {<UserDetails/>}/>
          <Route path="admin" element = {<Admin/>}/>
        </Route>
        
        <Route path="*" element={<NoMatch/>}/>
   </Routes>
  
    </div>
  )
}

export default App;