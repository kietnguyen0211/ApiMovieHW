import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { Routes, Route, Link } from "react-router-dom"
export default function App(){
  return(
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
        </Routes>
    </div>
  )
}