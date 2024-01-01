import {  useState } from "react";
import Close from "../assets/close.png"
import Info from "../assets/info.png"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/CounterSlice";




function Window({ openProduct, totalPrice, handleTotalPrice, avocadoQ, handleAvocadoQ, setOpenProduct, selectedProduct, handleBananaQuantity, bananaQuantity, handleEggPlant, eggPlant, papayaQ, handlePapayaQ, dragonQ, handleDragonQ, carotQ, handleCarotQ}) {
  
  const dispatch = useDispatch();

  const [messageInfo, setMessageInfo] = useState(false);
  const [plusMinus, setPlusMinus] = useState(0);
 
  

  const closeWindow = () => {
    setOpenProduct(false);
    setPlusMinus(0);
  };
  
  
  
  const handleAddToCart = () => {
    dispatch(addToCart(plusMinus))
    if (selectedProduct.type === 1 & plusMinus > 0) {
      handleBananaQuantity(bananaQuantity + plusMinus);
      setMessageInfo(true);
      setTimeout(() => {
      setMessageInfo(false);
      }, 1000);

    } else if (selectedProduct.type === 2 & plusMinus > 0) {
      handleEggPlant(eggPlant + plusMinus);
      setMessageInfo(true);
      setTimeout(() => {
      setMessageInfo(false);
      }, 1000);

    } else if (selectedProduct.type === 4 & plusMinus > 0) {
      handlePapayaQ(papayaQ + plusMinus);
      setMessageInfo(true);
      setTimeout(() => {
      setMessageInfo(false);
      }, 1000);

    } else if (selectedProduct.type === 3 & plusMinus > 0) {
      handleDragonQ(dragonQ + plusMinus)
      setMessageInfo(true);
      setTimeout(() => {
      setMessageInfo(false);
      }, 1000);

    } else if (selectedProduct.type === 5 & plusMinus > 0) {
      handleCarotQ(carotQ + plusMinus)
      setMessageInfo(true);
      setTimeout(() => {
      setMessageInfo(false);
      }, 1000);

    } else if (selectedProduct.type === 6 & plusMinus > 0) {
      handleAvocadoQ(avocadoQ + plusMinus)
      setMessageInfo(true);
      setTimeout(() => {
      setMessageInfo(false);
      }, 1000);
    }
    setPlusMinus(0);
    }
  const handlePlus = () => {
    setPlusMinus(plusMinus + 1)
  }
  const handleMinus = () => {
    if(plusMinus > 0){
      setPlusMinus(plusMinus -1)
    }
  }
  
 
  return (
    <>

    {/* WINDOW  */}
    <div className={`fixed bg-green-400 bottom-6 top-6 right-4 left-4 rounded-xl ${openProduct ? "visible" : "invisible"}`}>
        {/* CLOSE WINDOW BUTTON */}
      <button onClick={closeWindow}>
        <img className="absolute cursor-pointer top-4 right-4 w-8 h-8" src={Close} alt="close icon"/>
      </button>
      {/* PRODUCT SELECTED */}
      <div className="flex justify-between rounded-xl bg-white mt-9 h-64 mx-4 border">
        {/* IMAGE PRODUCT SELECTED */}
        <div className="mt-16 ml-7">
          <img className="w-24" src={selectedProduct?.imgUrl} alt={`${selectedProduct?.name} image`} />
        </div>

        <div className="mt-7 mr-8">
            {/* NAME / PRICE PRODUCT  */}
          <div>
              <h1 className="text-3xl font-bold">{selectedProduct?.name}</h1>
              <h1 className="text-xl mt-4">{selectedProduct?.price}</h1>
          </div>

          {/* BUTTON AND ADD TO CART */}
          <div className="flex items-center mt-2">
            <button onClick={handleMinus} className="w-12 h-12 rounded-lg mr-2 bg-green-600">
              <h1 className="text-white">-</h1>
            </button>
            <p>{plusMinus}</p>
            <button onClick={handlePlus} className="w-12 h-12 rounded-lg ml-2 bg-green-600">
              <h1 className="text-white">+</h1>
            </button>
          </div>
          <button onClick={handleAddToCart} className="bg-orange-500 w-28 ml-1 mt-2 rounded-xl h-12">
            <h1 className=" text-white text-xl">Add to Cart</h1>
          </button>
        </div>
      </div>

      
        {/* VISIBLE TEST INFORMATION ONLY WHEN ADD PRODUCT TO CART */}
      <div className={`flex items-center rounded-xl ml-4 my-2 bg-blue-400 mr-20 ${messageInfo ? "visible" : "invisible"}`}>
          <img className="w-7 h-7" src={Info} alt="indo icon"/>
          <h1 className="text-white">Product/s was added in cart</h1>
      </div>
      <div className="bg-white mx-4 rounded flex">
          <div className="text-xl">
            <h1 className="my-1"><span className="font-bold">Contents:</span> {selectedProduct?.gram}g</h1>
            <h1 className="my-1"><span className="font-bold">Origin:</span> {selectedProduct?.where}</h1>
            <h1 className="my-1"><span className="font-bold">Calories:</span> {selectedProduct?.Kcal} Kcal</h1>
            <h1 className="my-1"><span className="font-bold">Sugar:</span> {selectedProduct?.sugar}g</h1>
            <h1 className="my-1"><span className="font-bold">Distributor:</span> {selectedProduct?.distributor}</h1>
            <h1 className="my-1"><span className="font-bold">Co2:</span> {selectedProduct?.co2} kg</h1>
          </div>
      </div>
    
    </div>
    
    </>
    
    
  );
  
}
export default Window;