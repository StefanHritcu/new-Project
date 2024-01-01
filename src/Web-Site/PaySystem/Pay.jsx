import { useSelector } from "react-redux"
import Visa from "../assets/visa.png"
import MasterCard from "../assets/mastercard.png"
import Discover from "../assets/discover.png"
import PayPal from "../assets/paypal.png"
import { Link } from "react-router-dom"

function Pay(){
    const logInformation = useSelector(state => state.counter.logged);
    const areYouLogged = logInformation !== false;
    const prezzoTotale = useSelector(state => state.counter.totalPrice.toFixed(2))
    const numberProduct = useSelector(state => state.counter.value);

    const nameUser = useSelector(state => state.usersdata.userName);
    const surnameUser = useSelector(state => state.usersdata.userSurname);

    const balancy = useSelector(state => state.counter.personalBalance)
    return(
        <>
        <div className="flex flex-col">
            {/* BALANCE AND AMOUNT TO BE PAID */}
            <div className={`flex flex-col ${areYouLogged ? "flex" : "hidden"}`}>
                <h1 className="mx-3 text-center"><span className="p-6 text-3xl ml-2">Hi {surnameUser} {nameUser},</span>Welcome! 
                We offer a secure and fast payment service. 
                <span className="font-black "> Thanks to this months promotion you will receive a 20% discount for the whole year.</span></h1>
                <div className="flex justify-around items-center mt-4 text-3xl">
                <div className="flex-col">
                <h1 className="ml-4">Balance:</h1>
                <h1 className="text-green-800 text-3xl font-bold ml-8">{balancy.toFixed(2)}€</h1>
                </div>
                <div className="flex-col">
                <h1 className="ml-2">To pay: </h1>
                <div className="flex items-baseline">
                <h1 className="text-red-600 text-base font-bold mr-2">{prezzoTotale}€</h1>
                <h1 className="text-green-800 text-2xl font-bold">{prezzoTotale}</h1>
                </div>
                </div>
                </div>
            </div>
            <div className={`flex justify-around text-3xl ${areYouLogged ? "hidden" : "flex"}`}>
                <h1 className="ml-12">Product(s): <span className="text-3xl font-bold ml-12">{numberProduct}</span></h1>
                <h1 className="ml-6">To pay: <span className="text-red-600 text-3xl font-bold ml-2">{prezzoTotale}€</span></h1>
            </div>
            <h1 className="text-2xl mt-2 text-center font-light text-white mb-2 bg-green-500 p-4">Choose payment method</h1>
           {/* ARE YOU LOGIN ?? */} 
           <div className={`${areYouLogged ? "hidden" : "flex"}`}>
               <h1 className="text-red-500 font-black text-2xl px-4">To continue the payment you must first Register! <Link to="/login"><span className="text-black text-2xl  underline font-mono cursor-pointer">REGISTER</span></Link></h1>
           </div>
           {/* IF YOU ARE LOGGED: PAY !!!! :) */} 
                {/* 1/3 PAYMAINT METHOD */}
                <Link to="/paycart" className={`flex border border-blue m-2 mt-2 items-center active:bg-blue-400 hover:bg-blue-400 my-1 py-4 ${areYouLogged ? "flex" : "hidden"}`}>
                    <h1 className="text-2xl text-blue-700  ml-4 font-semibol">Credit</h1>
                    <section className="flex ml-4 mx-1">
                        <img className="mx-4" src={Visa} alt="visa logo"/>
                        <img className="mx-4" src={MasterCard} alt="mastercard logo"/>
                        <img className="mx-4" src={Discover} alt="discover logo"/>
                    </section>
                </Link>

                {/* 2/3 PAYMAINT METHOD */}
                <Link to="/paypaypal" className={`flex border border-blue m-2 items-center justify-center my-1 py-1 active:bg-blue-400 hover:bg-blue-400  ${areYouLogged ? "flex" : "hidden"}`}>
                    <h1 className="text-2xl text-blue-700 mr-24 font-semibol">PayPal</h1>
                    <img className="w-20 h-20 ml-24" src={PayPal} alt="paypal icon"/>
                </Link>

                {/* 3/3 PAYMAINT METHOD */}
                <Link to="/paylater" className={`flex border border-blue m-2 items-center justify-center my-1 py-6 active:bg-blue-400 hover:bg-blue-400 ${areYouLogged ? "flex" : "hidden"}`}>
                    <h1 className="text-2xl text-blue-700 mr-56 font-semibol ">Pay Later</h1>
                </Link>
        </div>
        
        </>
    )
}
export default Pay