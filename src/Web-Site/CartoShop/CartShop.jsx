import Banana from "../assets/banana.png"
import Avocado from "../assets/avocado.png"
import { Link } from "react-router-dom"
import Papaya from "../assets/papaya.png"
import DragonFruit from "../assets/dragonFruit.png"
import EggPlant from "../assets/eggPlant.png"
import Carot from "../assets/carot.png"


import { useSelector } from 'react-redux';


function CartShop(){


    {/* BANANA */}
    const bananaQuantity = useSelector(state => state.counter.bananaQuantity)
    const bananaMaggiorediUno = bananaQuantity > 0;
    {/* EGGPLANT */}
    const eggPlant = useSelector(state => state.counter.eggPlant);
    const eggplantMaggioreDiUno = eggPlant > 0;
    {/* PAPAYA */}
    const papayaQ = useSelector(state => state.counter.papayaQ);
    const papayaMaggioreDiUno = papayaQ > 0;
    {/* DRAGON FRUIT */}
    const dragonQ = useSelector(state => state.counter.dragonQ);
    const dragonMaggioreDiUno = dragonQ > 0;
    {/* CAROT */}
    const carotQ = useSelector(state => state.counter.carotQ);
    const carotMaggioreDiUno = carotQ > 0;
    {/* AVOCADO */}
    const avocadoQ = useSelector(state => state.counter.avocadoQ);
    const avocadoMaggioreDiUno = avocadoQ > 0;

    const totalValue = useSelector(state => state.counter.value);
    const isEmpty = totalValue > 0;

    {/* PRICES OF PRODUCTS MANAGEMENT */}
    const totalPriceBanana = useSelector(state => state.counter.priceBanana);
    const totalPriceCarot = useSelector(state => state.counter.priceCarot);
    const totalPriceAvocado = useSelector(state => state.counter.priceAvocado);
    const totalPricePapaya = useSelector(state => state.counter.pricePapaya);
    const totalPriceDragon = useSelector(state => state.counter.priceDragon);
    const totalPriceEggplant = useSelector(state => state.counter.priceEggplant);


    const totalCountPrice = useSelector(state => state.counter.totalPrice.toFixed(2));
    
    

    
    return(
        <>
        <div className="flex flex-col" >
            {/* IF YOU DO NOT YET HAVE ANY PRODUCTS SELECTED DIRECTS YOU TO THE SHOP */}
            <div className={`bg-orange-500 py-4 flex flex-col ${isEmpty ? "hidden md:flex" : "flex"}`}>
                <h1 className="ml-12 text-white font-bold font-mono text-3xl">The cart is empty</h1>
                <Link to="/" className="bg-green-400 text-center mx-28 my-4 py-2 rounded-full hover:bg-green-500 text-2xl">Go to Shop</Link>
            </div>
            {/* BANANA */}
            <div id="banana" className={`flex justify-around my-4 ${bananaMaggiorediUno ? "flex" : "hidden md:flex"}`}>
            <img src={Banana} alt="banana image" />
                <div className="flex ">
                    <div className="flex-col">
                       <h1 className="font-bold text-xl">Banana</h1>
                       <h1>Quantity: {bananaQuantity}</h1>
                       <h1>Price: {totalPriceBanana.toFixed(2)}€</h1>
                    </div>
                    <Link to="/">
                        <button className="mt-4 ml-10 rounded-xl bg-orange-500 p-4">Add More</button>
                    </Link>
                </div>
            </div>

             {/* CAROT */}
             <div className={`flex justify-around my-4 ${carotMaggioreDiUno ? "flex" : "hidden md:flex"}`}>
            <img src={Carot} alt="carot image" />
                <div className="flex ">
                    <div className="flex-col">
                       <h1 className="font-bold text-xl">Carot</h1>
                       <h1>Quantity: {carotQ}</h1>
                       <h1>Price: {totalPriceCarot.toFixed(2)}€</h1>
                    </div>
                    <Link to="/">
                        <button className="mt-4 ml-10 rounded-xl bg-orange-500 p-4">Add More</button>
                    </Link>
                </div>
            </div>

            {/* EGGPLANT */}
            <div className={`flex justify-around my-4 ${eggplantMaggioreDiUno ? "flex" :"hidden md:flex"}`}>
            <img src={EggPlant} alt="eggplant image" />
                <div className="flex ">
                    <div className="flex-col">
                       <h1 className="font-bold text-xl">Eggplant</h1>
                       <h1>Quantity: {eggPlant}</h1>
                       <h1>Price: {totalPriceEggplant.toFixed(2)}€</h1>
                    </div>
                    <Link to="/">
                        <button className="mt-4 ml-10 rounded-xl bg-orange-500 p-4">Add More</button>
                    </Link>
                </div>
            </div>

            {/* DRAGON FRUIT */}
            <div className={`flex justify-around my-4 ${dragonMaggioreDiUno ? "flex" : "hidden md:flex"}`}>
            <img src={DragonFruit} alt="dragon fruit image" />
                <div className="flex ">
                    <div className="flex-col">
                       <h1 className="font-bold text-xl">Dragon Fruit</h1>
                       <h1>Quantity: {dragonQ}</h1>
                       <h1>Price: {totalPriceDragon.toFixed(2)}€</h1>
                    </div>
                    <Link to="/">
                        <button className="mt-4 ml-4 rounded-xl bg-orange-500 p-4">Add More</button>
                    </Link>
                </div>
            </div>

            {/* AVOCADO */}
            <div className={`flex justify-around my-4 ${avocadoMaggioreDiUno ? "flex" : "hidden md:flex"}`}>
            <img src={Avocado} alt="avocado image" />
                <div className="flex ">
                    <div className="flex-col">
                       <h1 className="font-bold text-xl">Avocado</h1>
                       <h1>Quantity: {avocadoQ}</h1>
                       <h1>Price: {totalPriceAvocado.toFixed(2)}€</h1>
                    </div>
                    <Link to="/">
                        <button className="mt-4 ml-10 rounded-xl bg-orange-500 p-4">Add More</button>
                    </Link>
                </div>
            </div>

            {/* PAPAYA */}
            <div className={`flex justify-around my-4 ${papayaMaggioreDiUno ? "flex" : "hidden md:flex"}`}>
            <img src={Papaya} alt="papaya image" />
                <div className="flex ">
                    <div className="flex-col">
                       <h1 className="font-bold text-xl">Papaya</h1>
                       <h1>Quantity: {papayaQ}</h1>
                       <h1>Price: {totalPricePapaya.toFixed(2)}€</h1>
                    </div>
                    <Link to="/">
                        <button className="mt-4 ml-10 rounded-xl bg-orange-500 p-4">Add More</button>
                    </Link>
                </div>
            </div>

            {/* TOTAL PRICE TO PAY */}
            <div className={`flex flex-col ${isEmpty ? "flex" : "hidden md:flex"}`}>
                <div className="flex items-center justify-around mt-2 ml-2">
                    <h1 className="text-4xl font-bold font-mono">Total:</h1>
                    <h1 className="text-3xl">{totalCountPrice}€</h1>
                </div>
                <div className="mt-10">
                    <Link to="/pay" className="ml-28 bg-green-600 px-6 mt-4 rounded-lg text-3xl py-4">PAY NOW</Link>
                </div>
            </div>

        </div>
        
        </>
    )
}
export default CartShop