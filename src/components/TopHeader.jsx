// components/TopHeader.jsx
import Navbar from "./Navbar"
import Searchbar from "./Searchbar"

export default function TopHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow max-w-[600px] mx-auto w-full">
      <div className="px-4 pt-4 pb-2">
        <Navbar />
        <div className="mt-1">
          <Searchbar />
        </div>
      </div>
    </div>
  )
}
