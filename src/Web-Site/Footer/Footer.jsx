import { Link } from "react-router-dom"
import Linkedin from "../assets/linkedin.png"
import GitHub from "../assets/github.png"
import Facebook from "../assets/facebook.png"
import Proton from "../assets/proton.png"

function Footer() {
    return(
        <>
        <div className="bg-emerald-800 text-white mt-4">
           <Link to="/">
            <h1 className="ml-4 text-2xl font-black pt-10">HOME</h1>
           </Link>
           <hr className="border border-white mx-4" />
           <h1 className="ml-6 mt-2">Contact us</h1>
           <h1 className="ml-6">For Collaboration</h1>
           <h1 className="ml-4 text-3xl font-black mt-8">Follow</h1>
           <hr className="border border-white mx-4" />
           <div className="flex justify-between mx-10 py-8">
             <img className="bg-white p-4 border-white" src={Linkedin} alt="linkedin icon" title="Linkedin Account" />
             <img className="bg-white p-4 border-white" src={GitHub} alt="github icon" title="GitHub Account" />
             <img className="bg-white p-4 border-white" src={Facebook} alt="facebook icon" title="Facebook Account" />
             <img className="bg-white p-4 border-white" src={Proton} alt="proton icon" title="Proton Main" />
           </div>
           <h1 className="text-center pt-4 pb-10">Copyright © Tutti i diritti riservati.</h1>
        </div>
        </>
    )
}
export default Footer