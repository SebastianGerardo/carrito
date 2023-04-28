import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import ProductSection from "../pages/productSection"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>} />
          <Route path="product/:id" element={<ProductSection/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
