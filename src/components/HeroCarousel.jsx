// src/components/HeroCarousel.jsx
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useRef } from "react"

const slideImages = [
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
]

export default function HeroCarousel() {
  const timer = useRef(null)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    renderMode: "performance",
    defaultAnimation: {
      duration: 600,
      easing: (t) => t,
    },
    created(slider) {
      startAutoSlide(slider)
    },
    dragStart() {
      clearInterval(timer.current)
    },
    dragEnd(slider) {
      startAutoSlide(slider)
    },
  })

  const startAutoSlide = (slider) => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      slider.next()
    }, 5000)
  }

  useEffect(() => {
    return () => clearInterval(timer.current)
  }, [])

  return (
    <div ref={sliderRef} className="keen-slider h-64 rounded-xl overflow-hidden">
      {slideImages.map((url, i) => (
        <div key={i} className="keen-slider__slide relative">
          <img
            src={url}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Optional: overlay text */}
          {/* <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">Slide {i + 1}</h2>
          </div> */}
        </div>
      ))}
    </div>
  )
}
