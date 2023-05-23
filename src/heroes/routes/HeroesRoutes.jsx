import { Outlet } from "react-router-dom"
import { Navbar } from "../../ui"
import { HeroesApp } from "../../HeroesApp"




export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
          <Outlet/>
      </div>
    </>
  )
}
