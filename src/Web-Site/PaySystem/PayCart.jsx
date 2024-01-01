import { Link } from "react-router-dom"
import Visa from "../assets/visa.png"
import MasterCard from "../assets/mastercard.png"
import Discover from "../assets/discover.png"
import { useDispatch, useSelector } from "react-redux"
import Bitcoin from "../assets/bitcoin.png"
import Skrill from "../assets/skrill.png"
import AmericanExpress from "../assets/americanExpress.png"
import { useState } from "react"
import { resetTotalPrice, resetCart, resetCarrello, setPersonalBalance } from "../Redux/CounterSlice"
import Success from "../assets/success.png"



function PayCart() {
    const amountPay = useSelector(state => state.counter.totalPrice);
    const [cardholderName, setCardholderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const dispatch = useDispatch();
    const [paySuccessFully, setPaySuccessFully] = useState(false);

    const handleBlueBG = (event) => {
        const elements = document.querySelectorAll(".bg-blue-500");
        elements.forEach((el) => {
            el.classList.remove("bg-blue-500")
        })
        event.currentTarget.classList.add("bg-blue-500")
    };
    
    const handlePayClick = () => {
        if(cardholderName.trim() === "" || cardNumber.trim() === "") {
            setShowErrorMessage(true);
        } else {
            setPaySuccessFully(true);
            dispatch(resetTotalPrice());
            dispatch(resetCart());
            dispatch(resetCarrello());
        }
    }
    
    const valua = useSelector(state => state.counter.value);
    const handleAggiornaPrezzo = () => {
        dispatch(setPersonalBalance - valua);
    }

    return(
        <>
        {/* 1/3 PAYMAINT METHOD */}
        <Link to="/pay" className="flex border border-blue m-2 mt-2 items-center bg-blue-600 my-1 py-4">
                <h1 className="text-2xl text-white ml-4 font-semibol">Credit</h1>
            <section className="flex ml-4 mx-1">
                <img className="mx-4" src={Visa} alt="visa logo"/>
                <img className="mx-4" src={MasterCard} alt="mastercard logo"/>
                <img className="mx-4" src={Discover} alt="discover logo"/>
                <div className="absolute w-10 h-10 top-48 ml-16 transform rotate-45 bg-blue-600"></div>
            </section>
        </Link>

        {/* PAYMAINT FORM */}
        <div className="mt-8">
            {/* TOTALPRICE TO PAY */}
            <h1 className="text-xl mb-2 ml-4">Amount being paid now: <span className="font-bold text-red-500">{amountPay.toFixed(2)}€</span></h1>

            {/* SELECT YOUR CART */}
            <h1 className="ml-4 text-sm">Select the cart to pay with:</h1>
            <div className="flex ">
                <img onClick={handleBlueBG} className="ml-1 px-2 border hover:border-black" src={Visa} alt="visa icon"/>
                <img onClick={handleBlueBG} className="mx-1 px-3 border hover:border-black" src={MasterCard} alt="mastercard icon"/>
                <img onClick={handleBlueBG} className="mx-1 px-3 border hover:border-black" src={Bitcoin} alt="bitcoin icon"/>
                <img onClick={handleBlueBG} className="mx-1 px-3 border hover:border-black" src={Skrill} alt="skrill icon"/>
                <img onClick={handleBlueBG} className="mx-1 px-3 border hover:border-black" src={AmericanExpress} alt="amercian express icon"/>
            </div>
            {/* FORM */}
            <form className="flex">
                <label className="flex flex-col m-2">
                <h1 className="ml-1">Cardholders name</h1>
                <input type="text" 
                className="border border-black ml-2"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}/>

                <h1 className="ml-1">Card number</h1>
                <input type="text" 
                className="border border-black ml-2"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}/>

            {showErrorMessage && (
                <p className="text-sm text-red-600">
                 Fill in the blank fields before proceeding with the payment</p>
          )}
                </label>
                
                <h1 onClick={handlePayClick} className="ml-6 bg-green-500 px-10 py-14 mt-4 mr-10 text-3xl rounded-lg">Pay</h1>
            </form>

            <div className={`z-100 absolute bg-white border h-98 mx-4 border-black top-40 ${paySuccessFully ? "visible" : "invisible"}`}>
                <img className="ml-32 mt-4 w-24 h-24" src={Success} alt="success icon"/>
                    <h1 className="text-2xl font-mono font-semibold p-6 ml-2 mb-10">Transaction Completed Successfully</h1>
                    <div className="mb-20">
                    <Link to="/orders" onClick={handleAggiornaPrezzo} className="bg-green-600 ml-32 text-2xl py-2 px-6  text-white">Home</Link>
                    </div>
            </div>

        </div>
        </>
    )
}

export default PayCart