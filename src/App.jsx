import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Home } from "./components/Home"
import About from "./components/About"
import { Rootlayout } from "./components/layouts/Rootlayout"
import Error from "./components/layouts/Error"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="*" element={<Error/>}/>
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
