import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Home } from "./components/Home"
import About from "./components/About"
import { Rootlayout } from "./components/layouts/Rootlayout"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<Rootlayout/>}>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Home/>}/>
      </Route>
      </>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
