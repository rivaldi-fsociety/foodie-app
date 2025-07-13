import { ShoppingBag, MapPin, ChevronDown } from 'lucide-react'

function Navbar() {
  return (
    <section>
      <div className="flex flex-row justify-between items-center text-black">
        {/* Location Section */}
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1 items-center">
            <MapPin className="w-5 h-5 transition-transform duration-200 ease-in-out hover:scale-110 text-gray-600" />
            <p className="text-sm font-medium">Location</p>
          </div>

          {/* Interactive Street Name + Chevron */}
          <div className="flex flex-row gap-1 items-center group cursor-pointer transition-transform duration-200 ease-in-out hover:scale-[1.01]">
            <p className="text-md font-semibold group-hover:underline">
              City Forest, Bogor
            </p>
            <ChevronDown className="transition-transform duration-200 ease-in-out group-hover:rotate-180" />
          </div>
        </div>

        {/* Cart Button */}
        <div className="relative">
          <button className="bg-gray-300 rounded-full shadow p-3 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-md">
            <ShoppingBag />
          </button>
          <span className="absolute -bottom-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </div>
      </div>
    </section>
  )
}

export default Navbar
