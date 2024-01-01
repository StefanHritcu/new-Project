import { Link } from "react-router-dom"
import { setStreetAddress, setCity, setCountry } from "../Redux/UsersData"
import { useDispatch } from "react-redux";


function PayLater(){
    const dispatch = useDispatch();
    {/* ADDRESS */}
    const handleAddress = (e) => {
        dispatch(setStreetAddress(e.target.value));
    }

    {/* CITY */}
    const handleCity = (e) => {
        dispatch(setCity(e.target.value));
    }

    {/* COUNTRY */}
    const handleCountry = (e) => {
        dispatch(setCountry(e.target.value));
    }
    
    return(
        <>
        <div>
            <Link to="/pay" className="flex border border-blue m-2 items-center justify-center my-1 py-6 bg-blue-600">
                <h1 className="text-2xl text-white mr-56 font-semibol ">Pay Later</h1>
                <div className="absolute w-10 h-10 top-48 ml-4 transform rotate-45 bg-blue-600"></div>
            </Link>
            <h1 className="mt-4 p-4 text-l text-center underline"><span className="text-red-600">NOTE: </span>This option is valid 
            only for orders worth less than 100€</h1>

            <form className="mt-2">
                <h1 className="py-3 text-center text-white bg-green-500 font-medium text-2xl">We will send you a letter by post 
                with the bank transfer which you will have to pay within 30 days.</h1>

                {/* STREET ADRESS */}
                <div>
                <label className="ml-4">Street Address <span className="text-red-500 text-3xl mr-4">*</span></label>
                <input className="border border-black" type="text" onChange={handleAddress}/>
                </div>

                {/* CITY */}
                <div>
                <label className="ml-4 mr-3">City <span className="text-red-500 text-3xl mr-4">*</span></label>
                <input className="border border-black ml-16" type="text" onChange={handleCity}/>
                </div>

                {/* COUNTRY */}
                <div>
                <label className="ml-4 mr-3">Country <span className="text-red-500 text-3xl mr-4">*</span></label>
                <input className="border border-black ml-9" type="text" onChange={handleCountry}/>
                </div>
                <div>
                <Link to="/payinthirtyday">
                    <button className="ml-14 py-2 mt-8 px-32 bg-blue-600">
                        <h1 className="text-white">Next</h1>
                    </button>
                </Link>
                </div>
            </form>
        </div>
        </>
    )
}
export default PayLater