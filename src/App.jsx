import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Title from "./components/Title"

const Home = React.lazy(() => import("./Pages/Home")) 
const Special = React.lazy(() => import("./Pages/Special")) 
const AddNote = React.lazy(() => import("./Pages/AddNote")) 



function App() {
  return (  
    <div>
      <BrowserRouter>
      <Appbar />
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/Special" element={<Special />} />
          <Route path="/AddNote" element={<AddNote />} />
        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();

  return <>
    <Title label={"ShareYourThoughts"}/>
    <div className=" p-5 my-3 ml-32 mr-32 bg-purple-300 flex justify-between border  rounded">

      <button onClick={() => {
        navigate("/");
        }} className="p-2 bg-pink-100 font-mono cursor-pointer border rounded"> Home </button>

      <button onClick={() => {
        navigate("/Special");
      }} className="p-2 bg-pink-100 font-mono cursor-pointer border rounded">Special</button>

      <button onClick={() => {
        navigate("/AddNote");
      }} className="p-2 bg-pink-100 font-mono cursor-pointer border rounded">AddNote</button>

    </div>
  </>
}

export default App

//home page with all notes
// page with some specific notes
// an add note page