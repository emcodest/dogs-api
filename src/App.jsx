// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
 import "./App.css";
import Header from "./pages/header/Header"
import SearchDog from "./pages/dog/SearchDog"
import Breed from "./pages/breed/Breed"
// get router
import { RouterProvider, createBrowserRouter } from "react-router-dom"
const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchDog />
  },
  {
    path: "/breed",
    element: <Breed />
  }

])

function App() {
  return (
    <>
    <Header />
    <RouterProvider router={router} />
    </>
  
)
  
}

export default App;
