import PersonalImage from "../assets/blogimg.png"

function About(){
    return(
        <>
        
            <h1 className="text-4xl text-center font-mono bg-green-700 text-white">About</h1>
        
        <div className="flex flex-col">

            {/* FIRST LINE: TEXT AND IMAGE */}
            <div className="flex">
                <div className="bg-yellow-300">
                    <h1 className="text-xl mt-4 ml-4">Stefan Hritcu is the creator of this website.
                     I hope the user experience is comfortable and satisfactory.
                    </h1>
                </div>
                <div className="bg-yellow-300">
                    <img className="m-4" src={PersonalImage} alt="programmer image" />
                </div>
            </div>

            {/* SECOND LINE: TECNOLOGIES AND INFOS */}
            <div className="flex flex-col">
                <div>
                    <div className="flex justify-center font-medium bg-green-700 text-white border border-green-700">
                        <h1 className="m-2 hover:underline">HTML</h1>
                        <h1 className="m-2 hover:underline">CSS</h1>
                        <h1 className="m-2 hover:underline">TAILWIND-CSS</h1>
                    </div>
                    <div className="flex justify-center font-medium bg-green-700 text-white border border-green-700">
                        <h1 className="m-2 hover:underline">JAVASCRIPT</h1>
                        <h1 className="m-2 hover:underline">REACT</h1>
                        <h1 className="m-2 hover:underline">REDUX</h1>
                    </div>
                </div>
                <div className="flex  bg-green-700 border border-green-700 justify-between">
                    <div className="bg-green-700 text-yellow-500 mt-4 border-green-700">
                        <h1 className="mx-4">Technology still to be studied:</h1>
                    </div>
                    <div className="bg-green-700 border border-green-700 text-white mr-8 my-2">
                        <h1>WELPACK</h1>
                        <h1>GIT/GITHUB</h1>
                        <h1>FONDAMENTALS</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default About