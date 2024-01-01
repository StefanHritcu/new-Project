import { useEffect, useState } from "react"
import Burger from "../assets/burger.png"
import { useAnimation, motion } from "framer-motion"
import { Link } from "react-router-dom";



function Drawer({drawer, setDrawer}) {
    const closeDrawer = () => {
        setDrawer(false);
    }

        {/* FRAMER MOTION*/}
        const controls = useAnimation();
        useEffect(() => {
            controls.start(drawer ? "open" : "closed")
        }, [controls, drawer])
        const variants = {
            open: { x : 0 },
            closed: { x : "-100%" },
        }
       {/* IF YOU CLICK ON A LINK IN THE DRAWER IT WILL CLOSE */}
        const closeWindow = () => {
            setDrawer(false);
        }
    return(
        <>
        <motion.div 
         className={`fixed z-20 left-0 top-0 w-3/4 bg-green-800 h-screen ${drawer ? "visible" : "invisible"}`} 
         initial="closed"
         animate={controls}
         variants={variants}
         transition={{duration: 0.3}}>

            <div className="flex items-center">
                {/* BUTTON CLOSED DRAWER MENU*/}
                <button onClick={closeDrawer}>
                    <img className="w-12 h-12 mt-2" src={Burger} alt="burger icon"/>
                </button>
                {/* TITLE DRAWER MENU */}
                <h1 className="text-5xl ml-3">
                    <span className="text-white">Fresh</span>
                    <span className="text-lime-400">Fare</span>
                </h1>
            </div>
            {/* LINKS DRAWER MENU */}
            <div>
                <div className="flex flex-col text-3xl ml-4 mt-4 text-white">
                    <Link onClick={closeWindow} className="my-3" to="/">
                        <h1 className="hover:text-yellow-400">HOME</h1>
                    </Link>
                    <Link onClick={closeWindow} className="my-3" to="fruits">
                        <h1 className="hover:text-yellow-400">FRUITS</h1>
                    </Link>
                    <Link onClick={closeWindow} className="my-3" to="vegetables">
                        <h1 className="hover:text-yellow-400">VEGETABLES</h1>
                    </Link>
                    <Link onClick={closeWindow} className="my-3" to="about">
                        <h1 className="hover:text-yellow-400">ABOUT US</h1>
                    </Link>
                    <Link onClick={closeWindow} className="my-3" to="cartshop">
                        <h1 className="hover:text-yellow-400">CART SHOP</h1>
                    </Link>
                    <Link onClick={closeWindow} className="my-3" to="/orders">
                        <h1 className="hover:text-yellow-400">ORDERS</h1>
                    </Link>
                    <Link  onClick={closeWindow} className="my-3" to="login">
                        <h1 className="hover:text-yellow-400">LOG IN</h1>
                    </Link>
                </div>
            </div>

        </motion.div>
        
        </>
    )
}
export default Drawer