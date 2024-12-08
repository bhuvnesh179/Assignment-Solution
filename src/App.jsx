import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"

const Home = React.lazy(() => import("./components/Home")) 
const Special = React.lazy(() => import("./components/Special")) 
const AddNote = React.lazy(() => import("./components/AddNote")) 



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
    <div>

      <button onClick={() => {
        navigate("/");
        }}> Home </button>

      <button onClick={() => {
        navigate("/Special");
      }}>Special</button>

      <button onClick={() => {
        navigate("/AddNote");
      }}>AddNote</button>

    </div>
  </>
}

export default App

//home page with all notes
// page with some specific notes
// an add note page