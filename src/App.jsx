import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
