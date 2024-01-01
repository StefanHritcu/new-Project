import FacebookGray from "../assets/facebookGray.png"
import TwitterGray from "../assets/twitterGray.png"
import GmailGray from "../assets/gmaillGray.png"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setUserEmail, setUserName, setUserSurname } from "../Redux/UsersData";
import { setLogged, setPersonalBalance } from "../Redux/CounterSlice";
import Success from "../assets/success.png"
import User from "../assets/user.png"
import NormalEmail from "../assets/normalEmail.png"
import RightArrow from "../assets/rightArrow.png"


function Login() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [closeOpenLogin, setCloseOpenLogin] = useState(true);
    const [attentionMessage, setAttentionMessage] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);    

    const dispatch = useDispatch();
    const handleRegister = () => {
        if(name.trim() === "" || surname.trim() === "" || email.trim() === "") {
            setAttentionMessage(true);
        } else{
            dispatch(setUserName(name));
            dispatch(setUserSurname(surname));
            dispatch(setUserEmail(email));
            dispatch(setLogged(true));
            setCloseOpenLogin(false);
            setRegistrationSuccess(true)
            setTimeout(() => setRegistrationSuccess(false), 10000) 
        }
    }
    const nameUser = useSelector(state => state.usersdata.userName);
    const surnameUser = useSelector(state => state.usersdata.userSurname);
    const emailUser = useSelector(state => state.usersdata.email);

    const [ricaricaBalance, setRicaricaBalance] = useState(null);
    const [openRicaricaBalance, setOpenRicaricaBalance] = useState(false);
    const handlePayment = () => {
        setOpenRicaricaBalance(true);
    }
    const currentBalance = useSelector(state => state.counter.personalBalance);
    const [ifZeroRed, setIfZeroRed] = useState(true);
   

    const handleRecharge = () => {
        if(currentBalance === 0) {
            dispatch(setPersonalBalance(currentBalance + ricaricaBalance));
            setIfZeroRed(false);
        } else if(currentBalance > 0) {
            dispatch(setPersonalBalance(ricaricaBalance))
            setIfZeroRed(false);
        }
        
        setOpenRicaricaBalance(false);
        setRicaricaBalance(0);
    }
    const handleChangeAddMoney = (event) => {
        const inputValue = parseFloat(event.target.value);
        if (!isNaN(inputValue)) {
            setRicaricaBalance(inputValue);
        }
    }
    
    
    return(
        <>
        {/* REGISTER SECTION */}
        <div className={`flex items-center ${registrationSuccess ? "visible" : "hidden"}`}>
            <img className="w-20 h-20" src={Success} alt="success icon" />
            <h1 className="text-2xl ml-4">Registration completed successfully</h1>
        </div>
        <div className={`${closeOpenLogin ? "visible" : "hidden"}`}>
            <h1 className="text-center font-bold text-3xl my-10">Register</h1>
            <div className="flex justify-center my-4">
                <img className="border rounded-full h-12 w-12 p-3" src={FacebookGray} alt="facebook icon" />
                <img className="mx-4 border rounded-full h-12 w-12 p-3" src={TwitterGray} alt="twitter icon" />
                <img className="border rounded-full h-12 w-12 p-3" src={GmailGray} alt="gmail icon" />
            </div>

            <div className="flex flex-col">
                <input className="border border-black rounded-lg text-black mt-4 mx-20 p-2" 
                type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <p className={`text-red-600 ml-20 mt-1 ${attentionMessage ? "visible" : "invisible"}`}>Required field *</p>
                <input className="border border-black rounded-lg text-black mt-2 mx-20 p-2"
                 type="text" value={surname} placeholder="Surname" onChange={(e) => setSurname(e.target.value)}/>
                 <p className={`text-red-600 ml-20 mt-1 ${attentionMessage ? "visible" : "invisible"}`}>Required field *</p>
                <input className="border border-black rounded-lg text-black mt-2 mx-20 p-2" 
                type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <p className={`text-red-600 ml-20 mt-1 ${attentionMessage ? "visible" : "invisible"}`}>Required field *</p>
            </div>
            <button onClick={handleRegister}>
                <h1 className="mt-10 bg-green-700 py-4 px-10 text-white mx-32 text-center rounded-lg">REGISTER</h1>
            </button>
        </div>

        {/* YOUR ACCOUNT  */}
        <div className={`${closeOpenLogin ? "invisible" : "visible"}`}>

        <div className="flex items-center justify-between p-3">
                <div className="flex flex-col">
                <h1 className="text-2xl mb-2">Balance:</h1>
                <h1><span className={`text-white ${ifZeroRed ? "bg-red-600 px-5 rounded-md py-1" : "bg-green-700 px-5 rounded-md py-1"}`}>{parseFloat(currentBalance).toFixed(2)}€</span></h1> 
                </div>
                <button className="bg-blue-600 flex items-center justify-center p-2" onClick={handlePayment}>
                    <h1 className="ml-4 font-bold">Cash Payment</h1>
                    <img src={RightArrow} alt="" />
                </button>
            </div>
            <div className=" bg-green-600 text-white h-52">
                <div className="flex items-center">
                    <img className="m-6 w-24 h-24 bg-white rounded-xl" src={User} alt="user icon" />
                    <div className="bg-white rounded-xl p-2 mr-2 text-black">
                        <h1 className="mr-2 text-xl">{nameUser}</h1>
                        <h1 className="text-xl mr-4">{surnameUser}</h1>
                    </div>
                </div>
                <div className="bg-white flex items-center mx-6 rounded-xl text-black">
                    <img className="ml-4" src={NormalEmail} alt="normal email icon" />
                    <h1 className="px-2">{emailUser}</h1>
                </div>
            </div>

            {/* PAYMENT WINDOW/ ADD MONEY IN YOUR ACCOUNT BALANCE */}
        <div className={`absolute top-52 bg-blue-600 mx-10 p-4 ${openRicaricaBalance ? "visible" : "hidden"}`}>
            <h1 className="text-center text-white text-2xl">Top up your account balance</h1>
            <div className="bg-white mt-4 flex items-center mx-10">
                <input className="p-1" type="number"
                 value={ricaricaBalance} 
                 placeholder="Enter import"
                 onChange={handleChangeAddMoney}/>
                <h1>€</h1>
            </div>
            <div className="mt-2 text-cente bg-white mx-10">
                <h1>Add <span className="text-green-600">{ricaricaBalance}</span>€ ?</h1>
            </div>
            <button onClick={handleRecharge} className="mt-8 bg-green-600 text-white px-12 py-4 ml-14">
                <h1>RECHARGE</h1>
            </button>
        </div>
        </div>
        </>
    )
}
export default Login