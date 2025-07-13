import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const categories = [
  {
    name: "Food",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop",
  },
  {
    name: "Stores",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop",
  },
  {
    name: "Grocery",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?w=200&h=200&fit=crop",
  },
  {
    name: "Pharmacy",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?w=200&h=200&fit=crop",
  },
  {
    name: "Delivery",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?w=200&h=200&fit=crop",
  },
  {
    name: "Food",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop",
  },
  {
    name: "Stores",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop",
  },
]

export default function Category() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 10,
    },
  })

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Categories</h2>
        <button className="relative text-sm text-gray-500 hover:text-orange-500 cursor-pointer transition-colors duration-300 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:w-0 before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full">
            See All
        </button>
      </div>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="keen-slider__slide shrink-0 w-auto px-2 h-[60px] flex flex-row items-center gap-2 rounded-full bg-gray-100 shadow-md hover:scale-105 hover:shadow-lg cursor-pointer group"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="text-sm font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
