import type React from "react"
import type { ReactNode } from "react"
import Navbar from "./navbar/NavBar"
import Footer from "./footer/Footer"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
