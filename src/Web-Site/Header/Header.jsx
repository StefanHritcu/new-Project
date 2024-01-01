import { useState } from "react"
import Burger from "../assets/burger.png"
import Search from "../assets/search.png"
import Cart from "../assets/cart.png"
import { Link } from "react-router-dom"

import Vegetables from "../assets/vegetablesIcon.png"
import Fruits from "../assets/fruitsIcon.png"
import Drawer from "../Drawer/Drawer"
import { useSelector } from "react-redux"



function Header() {
    const [searchData, setSearchData] = useState("");
    const [openCategories, setOpenCategories] = useState(false);
    
    
    const count = useSelector((state) => state.counter.value) 
    

   

    {/* STATE TO MANAGE THE DRAWER OPEN */}
    const [drawer, setDrawer] = useState(false);
    const openDrawer = () => {
        setDrawer(true);
    }

    const handleSearch = (e) => {
        setSearchData(e.target.value);
    }
    const handleCategories = () => {
        setOpenCategories(!openCategories);
    }


    return(
        <>
        {/* HEADER */}
       <div className="z-1">


        {/* FIRST LINE */}
         <div className="bg-green-700 flex items-center h-16">


            {/* DRAWER MENU */}
            <button onClick={openDrawer}>
                <img src={Burger} alt="drawer menu" />
            </button>

            {/* SEARCH SECTION/INPUT */}
            <div className="flex ml-4 h-10">
            <img className="absolute left-16 h-10 w-10" src={Search} alt="Search icon"/>
                <input className="text-center text-xl" type="search"
                placeholder="Search..."
                onChange={handleSearch}/>
            </div>


            {/* CART SHOP IMAGE/ICON */}
            <div>
                <Link to="/cartshop">
                    <img className="ml-10 w-10 h-10" src={Cart} alt="Cart icon"/>
                </Link>
                 {/* BADGE DI CONTEGGIO/ RED POINT WITH NUMBER COUNTER */}
                 <div className={`absolute top-2 rounded-full right-3 bg-red-500 w-6 h-6 ${count > 0 ? "visible" : "invisible"}`}>
                    <h1 className="text-white text-center">{count}</h1>
                </div>
            </div>
        </div>


        {/* SECONDE LINE: CATEGORIES */}
        <div className="flex items-center mt-2">


            {/* CATEGORIES LINK/ PRESS => OPNE FRUITS and VEGETABLES */}
            <button onClick={handleCategories} className="flex border h-10 ml-1 hover:bg-green-400">
                <img className=" w-6 h-6 mt-1 ml-2" src={Burger} alt="" />
                <h1 className="cursor-pointer ml-1 mr-2 mt-1 text-xl font-semibold">Categories:</h1>
            </button>

            <div className={`flex ${openCategories ? "visible" : "invisible"}`} >
                
            {/* FRUITS */}
            <Link className="flex items-center ml-1 hover:underline hover:text-red-500" to="/fruits">
                <img className="w-10 h-10 mr-2" src={Fruits} alt="fruits icon"/>
                <h1 className="mr-3">Fruits</h1>
            </Link>

            {/* VEGETABLES */}
            <Link className="flex items-center ml-1 hover:underline hover:text-red-500" to="vegetables">
                <img src={Vegetables} alt="vegetables icon"/>
                <h1>Vegetables</h1>
            </Link>
            </div>
        </div>

        {/* UNDERLINE/ END HEADER */}
        <div className="border mt-1"></div>
       </div>

       <Drawer drawer={drawer} setDrawer={setDrawer}/>
       
        </>
    )
}
export default Header