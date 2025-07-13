import HeroCarousel from './components/HeroCarousel'
import Category from './components/Category'
import FoodCardSlider from './components/FoodCardSlider'
import BottomNavbar from './components/BottomNavbar'
import TopHeader from './components/TopHeader'

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center">
      <div className="w-full max-w-[600px] mx-auto bg-white shadow-md">
        <TopHeader />
        <div className="pt-[150px] pb-[70px] px-4 space-y-2">
          <HeroCarousel />
          <Category />
          <FoodCardSlider />
          <FoodCardSlider />
        </div>
        <BottomNavbar />
      </div>
    </div>
  )
}


export default App
