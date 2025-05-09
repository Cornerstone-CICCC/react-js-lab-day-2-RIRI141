import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
    <div className="container h-lvh bg-amber-200 flex justify-center items-center ">
        <main>
            <Outlet />
        </main>
    </div>
    </>
  )
}

export default Layout