import { useState } from "react"
import { CreditCard, Home, IdCardLanyard, ListOrdered } from "lucide-react"

export default function BottomNavbar() {
  const [activeTab, setActiveTab] = useState("Home")

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md z-50 max-w-[600px] mx-auto w-full">
      <div className="flex justify-around items-center h-14">
        <NavItem
          icon={<Home />}
          label="Home"
          isActive={activeTab === "Home"}
          onClick={() => setActiveTab("Home")}
        />
        <NavItem
          icon={<ListOrdered />}
          label="Order"
          isActive={activeTab === "Order"}
          onClick={() => setActiveTab("Order")}
        />
        <NavItem
          icon={<CreditCard />}
          label="Payment"
          isActive={activeTab === "Payment"}
          onClick={() => setActiveTab("Payment")}
        />
        <NavItem
          icon={<IdCardLanyard />}
          label="Profile"
          isActive={activeTab === "Profile"}
          onClick={() => setActiveTab("Profile")}
        />
      </div>
    </nav>
  )
}

function NavItem({ icon, label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center text-sm transition-all duration-200 ease-in-out hover:scale-105 active:scale-95 cursor-pointer ${
        isActive ? "text-amber-500" : "text-gray-600 hover:text-blue-600"
      }`}
    >
      <div className="transition-colors duration-200">{icon}</div>
      <span className={`text-xs mt-1 ${isActive ? "font-semibold" : ""}`}>
        {label}
      </span>
    </button>
  )
}
