import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Heart, ArrowUpRight } from "lucide-react"

const foodImageMap = {
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  sushi: "https://images.unsplash.com/photo-1553621042-f6e147245754",
  ramen: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
  fries: "https://images.unsplash.com/photo-1606755962773-9d3cdee85429",
  salad: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
}

const foodTypes = ["pizza", "sushi", "ramen", "fries", "salad"]

const items = foodTypes.map((type, i) => ({
  title: type.charAt(0).toUpperCase() + type.slice(1),
  rating: (Math.random() * (5 - 4) + 4).toFixed(1),
  reviews: `${Math.floor(Math.random() * 3 + 1)}.${Math.floor(Math.random() * 10)}k`,
  image: `${foodImageMap[type]}?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0`,
  info: "15-30 min · Easy · By Vendor",
}))

export default function FoodCardSlider() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 16,
    },
  })

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Picks For You</h2>
        <button className="relative text-sm text-gray-500 hover:text-orange-500 cursor-pointer transition-colors duration-300 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:w-0 before:bg-orange-500 before:transition-all before:duration-300 hover:before:w-full">
            See All
        </button>
      </div>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, i) => (
          <div
            key={i}
            className="keen-slider__slide shrink-0 w-[240px] bg-white rounded-xl shadow-md overflow-hidden relative group hover:shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            {/* Image wrapper */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
              />
              {/* Rating badge */}
              <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-xs shadow">
                ⭐ {item.rating} ({item.reviews})
              </div>
              {/* Favorite icon */}
              <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow transition-all duration-300 hover:scale-110">
                <Heart className="w-4 h-4 text-red-500" fill="red" />
              </div>
            </div>

            {/* Text content */}
            <div className="p-3 space-y-1">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.info}</p>
            </div>

            {/* Floating button */}
            <button className="cursor-pointer absolute bottom-3 right-3 bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center shadow transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
