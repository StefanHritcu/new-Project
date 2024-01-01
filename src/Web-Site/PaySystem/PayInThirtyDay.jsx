import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { resetCarrello, resetCart, } from "../Redux/CounterSlice";

function PayinThirtyDay(){
    const stateAddress = useSelector(state => state.usersdata.streetAddress);
    const stateCity = useSelector(state => state.usersdata.city);
    const stateCountry = useSelector(state => state.usersdata.country);

    const [stateConfirm, setStateConfirm] = useState(false);

    const handleConfirm = () => {
        setStateConfirm(true);
    }
    const dispatch = useDispatch();
    const handleResetCart = () => {
        dispatch(resetCart(0));
        dispatch(resetCarrello(0));
    }

    return(
        <>
        <div>
            <div>
            <p className="ml-2">Your address is: </p>
            <h1 className="ml-2 mt-2 text-2xl">{stateAddress}, {stateCity}</h1>
            <h1 className="ml-2 text-2xl">{stateCountry}</h1>

            <button onClick={handleConfirm} className="mt-6 px-20 bg-green-600 text-white ml-20 py-4">
                <h1>Confirm</h1>
            </button>
            </div>
            <div className={`absolute bg-blue-500 text-white p-6 top-20 text-3xl ${stateConfirm ? "visible" : "invisible"}`}>
                <h1 className="my-4">Thank You!</h1>
                <h1>Within 3 working days you will receive the letter at your home</h1>
                <Link to="/orders">
                    <button onClick={handleResetCart} className="bg-blue-800 mt-20 py-4 px-12 ml-20">
                    <h1 className="text-center mb-2">Home</h1>
                    </button>
                </Link>
            </div>
        </div>
        </>
    )
}
export default PayinThirtyDay