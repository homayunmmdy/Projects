import { BrowserRouter, Route, Routes } from "react-router-dom"
import Feed from "./components/Feed"
import Profile from "./pages/Profile"
import NavBar from "./components/Navbar"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
