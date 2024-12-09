import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Title from "./components/Title"
import { RecoilRoot } from "recoil"

const Home = React.lazy(() => import("./Pages/Home")) 
const Special = React.lazy(() => import("./Pages/Special")) 
const AddNote = React.lazy(() => import("./Pages/AddNote")) 

function Main(){
  return(
    <>
    <RecoilRoot>
      <App/>
    </RecoilRoot>
    </>
  )
}

function App() {
  return (  
    <div className="h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
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
    <Title label={"ShareYourStory"}/>
    <div className="p-5 my-3 mx-4 sm:mx-8 md:mx-16 lg:mx-32 bg-purple-300 flex flex-wrap justify-between border rounded">


      <button onClick={() => {
        navigate("/");
        }} className="p-2 bg-pink-100 font-mono cursor-pointer border rounded"> Home </button>

      <button onClick={() => {
        navigate("/Special");
      }} className="p-2 bg-pink-100 font-mono cursor-pointer border rounded">Special</button>

      <button onClick={() => {
        navigate("/AddNote");
      }} className="p-2 bg-pink-100 font-mono cursor-pointer border rounded">Add a Story/Note</button>

    </div>
  </>
}

export default Main

//home page with all notes
// page with some specific notes
// an add note page