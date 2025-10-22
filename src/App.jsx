import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./components/pages/ Home"
import Login from "./components/pages/Login"
import FreeTrial from "./components/pages/FreeTrial"


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/freetrial" element={<FreeTrial/>}/>
        <Route />
      </Routes>
    </HashRouter>
  )
}

export default App
