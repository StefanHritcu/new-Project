import { Link } from "react-router-dom"
import PayPal from "../assets/paypal.png"
import paypalCart from "../assets/paypalCart.png"
import { useDispatch, useSelector } from "react-redux"
import Visa from "../assets/visa.png"
import AmericanExpress from "../assets/americanExpress.png"
import MasterCard from "../assets/mastercard.png"
import Success from "../assets/success.png"
import { useState } from "react"
import { resetCarrello, resetCart, resetTotalPrice } from "../Redux/CounterSlice"

function PayPayPal() {
    const totalToPay = useSelector(state => state.counter.totalPrice);
    const nomeUtente = useSelector(state => state.usersdata.userName);
    const [paySuccessFully, setPaySuccessFully] = useState(false);

    const dispatch = useDispatch();
    const handlePay = () => {
        setPaySuccessFully(true);
        dispatch(resetCart(0));
        dispatch(resetTotalPrice(0));
        dispatch(resetCarrello(0));

    }
    return(
        <>
        <div>
            <Link to="/pay" className="flex border border-blue mt-3 m-2 items-center justify-center my-1 py-1 bg-blue-200">
                <h1 className="text-3xl text-blue-700 font-semibol">PayPal</h1>
                <img className="w-28 h-28 ml-24" src={PayPal} alt="paypal icon"/>
                <div className=" w-10 h-10 absolute z-10 top-60 transform rotate-45 bg-blue-200"></div>
            </Link>

            {/* PAYPAL LOGO AND CART ICON WITH USER BALANCE */}
            <div className="flex justify-around items-center mt-4">
                <img className="w-28 h-28 ml-2" src={PayPal} alt="paypal icon"/>
                <div className="flex items-center">
                    <img className="w-10 h-10 mr-4" src={paypalCart} alt="cart paypal icon"/>
                    <h1 className="text-3xl"><span className="text-red-600">€{totalToPay.toFixed(2)}</span></h1>
                </div>
            </div>
            <hr className="border-black"/>

            {/* HI "name" USER! */}
            <h1 className="text-l ml-4 mt-2">Hi {nomeUtente}!</h1>
            <h1 className="text-2xl ml-4 mt-2">Choose a way to pay</h1>

            {/* SELECT THE WAY TO PAY */}
            <div className="mt-10">
                <div className="flex items-center justify-center mt-2">
                    <input className="mr-4 h-4 w-4" type="radio" name="paymentMethod"/>
                    <img className="mx-3" src={Visa} alt="visa icon"/>
                    <h1 className="tex">Visa/Visa Debit/Visa Electron x-1234</h1>
                </div>

                <div className="flex items-center justify-start mt-2">
                    <input className="ml-4 h-4 w-4" type="radio" name="paymentMethod"/>
                    <img className="mx-7" src={MasterCard} alt="visa icon"/>
                    <h1 className="mr-30">MasterCard x-1234</h1>
                </div>

                <div className="flex items-center justify-start mt-2">
                    <input className="ml-4 h-4 w-4" type="radio" name="paymentMethod"/>
                    <img className="ml-7" src={AmericanExpress} alt="visa icon"/>
                    <h1 className="ml-7">Amex x-1234</h1>
                </div>
                <button onClick={handlePay} className="bg-blue-700 py-2 px-32 ml-12 mt-10">
                    <h1 className="text-white text-2xl font-bold">Pay</h1>
                </button>
                <hr className="border border-black mt-8"/>
                <div className="flex justify-around mt-2">
                    <h1>Polities</h1>
                    <h1>Terms</h1>
                    <h1>Privaciy</h1>
                    <h1>Feedback</h1>
                </div>
            </div>

            <div className={`z-20 absolute bg-white border h-98 mx-4 border-black top-40 ${paySuccessFully ? "visible" : "invisible"}`}>
                <img className="ml-32 mt-4 w-24 h-24" src={Success} alt="success icon"/>
                    <h1 className="text-2xl font-mono font-semibold p-6 ml-2 mb-10">Transaction Completed Successfully</h1>
                    <div className="mb-20">
                    <Link to="/orders" className="bg-green-600 ml-32 text-2xl py-2 px-6  text-white">Home</Link>
                    </div>
            </div>
        </div>
        </>
    )
}
export default PayPayPal