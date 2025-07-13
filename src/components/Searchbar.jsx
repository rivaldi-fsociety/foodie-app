import { Search, SlidersHorizontal } from 'lucide-react'

function Searchbar() {
  return (
    <section>
      <div className="flex items-center py-2 gap-2 bg-white">
        {/* Search input area */}
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-3 rounded-full flex-grow transition-all duration-200 hover:shadow-md hover:scale-[1.01] focus-within:shadow-md focus-within:scale-[1.01]">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>

        {/* Filter Button */}
        <button className="bg-orange-500 hover:bg-orange-600 active:scale-95 hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-full px-4 py-2 flex items-center gap-1 shadow-sm hover:shadow-md cursor-pointer">
          Filter
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}

export default Searchbar
