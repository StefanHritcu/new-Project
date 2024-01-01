import RightArrow from "../assets/rightArrow.png"
import Banana from "../assets/banana.png"
import Avocado from "../assets/avocado.png"
import DragonFruit from "../assets/dragonFruit.png"
import EggPlant from "../assets/eggPlant.png"
import Carot from "../assets/carot.png"
import Papaya from "../assets/papaya.png"
import { useState } from "react"
import Window from "../WindowProduct/Window"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setBananaQuantity,setAvocadoQ, setTotalPrice, setCarotQ, setDragoQ, setEggPlant, setPapayaQ } from "../Redux/CounterSlice"
import Footer from "../Footer/Footer"


export const products = [
    {
      name: "Banana",
      price: 0.69,
      description: "Premium Banana Quality Chipita made in Ecuador.",
      imgUrl: Banana,
      type: 1,
      gram: 0.12,
      where: "Peru",
      Kcal: 90,
      sugar: 12,
      distributor: "Sichita International",
      co2: 0.5,
    },
    {
        name: "Papaya",
        price: 5.99,
        description: "Exotic fruit that you must try once in your life.",
        imgUrl: Papaya,
        type: 4,
        gram: 500,
        where: "Thailandia",
        Kcal: 43,
        sugar: 8,
        distributor: "Thai papay export",
        co2: 0.5,
    },
    {
        name: "Dragon Fruit",
        price: 8.39,
        description: "Explore the exotic taste of Dragon Fruit: juicy, sweet, enchanting.",
        imgUrl: DragonFruit,
        type: 3,
        gram: 200,
        where: "Vietnam",
        Kcal: 60,
        sugar: 9,
        distributor: "Vietnam dragon export",
        co2: 1,
    },
    {
        name: "EggPlant",
        price: 3.89,
        description: "Local aubergine, genuine delicious from the heart of the Italian countryside.",
        imgUrl: EggPlant,
        type: 2,
        gram: 400,
        where: "Italia",
        Kcal: 25,
        sugar: 2.5,
        distributor: "Bella melanzana del Sud",
        co2: 0.4,
    },
    {
        name: "Carot",
        price: 3.69,
        description: "Carrots directly from the farmer in your city.",
        imgUrl: Carot,
        type: 5,
        gram: 60,
        where: "Russia",
        Kcal: 41,
        sugar: 4.7,
        distributor: "Bleat what the Carot export",
        co2: 0.1,
    }
    , {
        name: "Avocado",
        price: 1.29,
        description: "Fresh avocados from the best selection on the market.",
        imgUrl: Avocado,
        type: 6,
        gram: 200,
        where: "Colombia",
        Kcal: 160,
        sugar: 0.2,
        distributor: "El venditor Mundial",
        co2: 2,
    },
    
  ];

function Home(){
    const dispatch = useDispatch();

    const bananaQuantity = useSelector(state => state.counter.bananaQuantity);
    const handleBananaQuantity = (quantity) => {
        dispatch(setBananaQuantity(quantity));
      };
    const totalValue = useSelector(state => state.counter.value);
    const handleTotalValue = (quantity) => {
        dispatch(addToCart(quantity));
    }
    
    const eggPlant = useSelector(state => state.counter.eggPlant);
    const handleEggPlant = (quantity) => {
        dispatch(setEggPlant(quantity));
    };
    const papayaQ = useSelector(state => state.counter.papayaQ);
    const handlePapayaQ = (quantity) => {
        dispatch(setPapayaQ(quantity));
    }
    const dragonQ = useSelector(state => state.counter.dragonQ);
    const handleDragonQ = (quantity) => {
        dispatch(setDragoQ(quantity))
    }
    const carotQ = useSelector(state => state.counter.carotQ);
    const handleCarotQ = (quantity) => {
        dispatch(setCarotQ(quantity))
    }
    const avocadoQ = useSelector(state => state.counter.avocadoQ);
    const handleAvocadoQ = (quantity) => {
        dispatch(setAvocadoQ(quantity))
    }
   
    const totalPrice = useSelector(state => state.counter.totalPrice);
    const handleTotalPrice = (quantity) => {
        dispatch(setTotalPrice(quantity))
    }
    
    {/* STATE FOR MANAGE OPEN WINDOW  */}
    
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [openProduct, setOpenProduct] = useState(false);

    const handleOpenProduct = (product) => {
        setSelectedProduct({ ...product, id: product.name.toLowerCase() });
        setOpenProduct(true);
    };

    const username = useSelector(state => state.usersdata.userName);
    return(
        <>
        <h1>Welcome {username}</h1>
        <div className="z-10">
            {/* POPULAR PRODUCTS */}
            <div className="flex flex-col">
                {/* CATEGORIES NAME AND BUTTON SEE MORE */}
                <div className="flex justify-between m-2 my-4">
                    <h1 className="text-xl font-light">Popular</h1>
                    <Link to="/seemore" className="border flex items-center hover:bg-green-400">
                        <h1 className="p-1">See More</h1>
                        <img className="w-5 h-5" src={RightArrow} alt="right arrow icon"/>
                    </Link>
                </div>

                {/* TWO POPULAR PRODUCTS */}
                
                <div className="flex">
                {/* BANANA  */}
                {products.slice(0, 1).map((product) => (
                <button key={product.name} onClick={() => handleOpenProduct(product)}
                    className="border mr-2 ml-2 w-48 h-72 flex flex-col hover:border-black">
                <img className="mx-10 w-24 h-24 mt-10" src={product.imgUrl} 
                    title={`Click to see more ${product.name}`} alt={`${product.name} image`}/>
                <h1 className="ml-2 mt-6">{product.price} €</h1>
                <h2 className="text-sm p-2 mt-2">{product.description}</h2>
                </button>
                ))}

                {/* PAPAYA */}
                {products.slice(1, 2).map((product) => (
                <button key={product.name} onClick={() => handleOpenProduct(product)}
                    className="border mr-2 ml-2 w-48 h-72 flex flex-col hover:border-black">
                <img className="mx-10 w-24 h-24 mt-10" src={product.imgUrl} 
                    title={`Click to see more ${product.name}`} alt={`${product.name} image`}/>
                <h1 className="ml-2 mt-6">{product.price} €</h1>
                <h2 className="text-sm p-2 mt-2">{product.description}</h2>
                </button>
                ))}
            </div>  
                
        </div>


            {/* NEW PRODUCTS */}
            <div className="flex flex-col">
                {/* CATEGORIES NAME AND BUTTON SEE MORE */}
                <div className="flex justify-between m-2 my-4">
                    <h1 className="text-xl font-light">New</h1>
                    <Link to="/seemore" className="border flex items-center hover:bg-green-400">
                        <h1 className="p-1">See More</h1>
                        <img className="w-5 h-5" src={RightArrow} alt="right arrow icon"/>
                    </Link>
                </div>

                {/* TWO NEW PRODUCTS */}   
                <div className="flex">
                {/* DRAGON FRUIT  */}
                {products.slice(2, 3).map((product) => (
                <button key={product.name} onClick={() => handleOpenProduct(product)}
                    className="border mr-2 ml-2 w-48 h-72 flex flex-col hover:border-black">
                    <img className="mx-10 w-24 h-24 mt-10" src={product.imgUrl} 
                    title={`Click to see more ${product.name}`} alt={`${product.name} image`}/>
                    <h1 className="ml-2 mt-6">{product.price} €</h1>
                    <h2 className="text-sm p-2 mt-2">{product.description}</h2>
                </button>
                ))}

                {/*  EGGPLANT */}
                {products.slice(3, 4).map((product) => (
                <button key={product.name} onClick={() => handleOpenProduct(product)}
                    className="border mr-2 ml-2 w-48 h-72 flex flex-col hover:border-black">
                    <img className="mx-10 w-24 h-24 mt-10" src={product.imgUrl} 
                    title={`Click to see more ${product.name}`} alt={`${product.name} image`}/>
                    <h1 className="ml-2 mt-6">{product.price} €</h1>
                    <h2 className="text-sm p-2 mt-2">{product.description}</h2>
                </button>
                ))}
            </div> 
            </div>


            {/* SPECIAL OFFER PRODUCTS */}
            <div className="flex flex-col">
                {/* CATEGORIES NAME AND BUTTON SEE MORE */}
                <div className="flex justify-between m-2 my-4">
                    <h1 className="text-xl font-light">Special Offer</h1>
                    <Link to="/seemore" className="border flex items-center hover:bg-green-400">
                        <h1 className="p-1">See More</h1>
                        <img className="w-5 h-5" src={RightArrow} alt="right arrow icon"/>
                    </Link>
                </div>

                {/* TWO SPECIAL OFFER */}
                
                    
                <div className="flex">
                {/* CAROT */}
                {products.slice(4, 5).map((product) => (
                <button key={product.name} onClick={() => handleOpenProduct(product)}
                    className="border mr-2 ml-2 w-48 h-72 flex flex-col hover:border-black">
                <img className="mx-10 w-24 h-24 mt-10" src={product.imgUrl} 
                    title={`Click to see more ${product.name}`} alt={`${product.name} image`}/>
                <h1 className="ml-2 mt-6">{product.price}</h1>
                <h2 className="text-sm p-2 mt-2">{product.description} €</h2>
                </button>
                ))}

                {/* AVOCADO */}
                {products.slice(5, 6).map((product) => (
                <button key={product.name} onClick={() => handleOpenProduct(product)}
                    className="border mr-2 ml-2 w-48 h-72 flex flex-col hover:border-black">
                <img className="mx-10 w-24 h-24 mt-10" src={product.imgUrl} 
                    title={`Click to see more ${product.name}`} alt={`${product.name} image`}/>
                <h1 className="ml-2 mt-6">{product.price}</h1>
                <h2 className="text-sm p-2 mt-2">{product.description} €</h2>
                </button>
                ))}
            
                </div>
            </div>
        </div>

        <Footer />

        <Window openProduct={openProduct} setOpenProduct={setOpenProduct} selectedProduct={selectedProduct}
        bananaQuantity={bananaQuantity} handleBananaQuantity={handleBananaQuantity}
        eggPlant={eggPlant} handleEggPlant={handleEggPlant}
        totalValue={totalValue} handleTotalValue={handleTotalValue}
        papayaQ={papayaQ} handlePapayaQ={handlePapayaQ}
        dragonQ={dragonQ} handleDragonQ={handleDragonQ}
        carotQ={carotQ} handleCarotQ={handleCarotQ}
        avocadoQ={avocadoQ} handleAvocadoQ={handleAvocadoQ}
        totalPrice={totalPrice} handleTotalPrice={handleTotalPrice}
        />
        </>
    )
}
export default Home