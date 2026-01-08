import { Header } from "./components/Header.js"
import { Home } from "./components/Home.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./components/Detail.js";
import { Contact } from "./components/Contact.js";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
