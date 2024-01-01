import { Link } from "react-router-dom";
import { products } from "../Homee/Home";

function Fruits() {
    return (
        <>
            <div className="flex flex-col">
                {products.slice(0, 3).map((product) => (
                    <div key={product.name}>
                        <div className="flex justify-around my-4">
                            <div className={`ml-2`}>
                                <h1 className="mt-4 text-4xl">{product.name}</h1>
                                <h1 className="ml-1 mb-2">{product.price}</h1>
                                {/* Utilizza il componente Link per la navigazione */}
                                <Link to="/" className="bg-orange-500 text-white px-6 mr-20 py-2 rounded-lg">
                                    See More
                                </Link>
                            </div>
                            <img className="w-28 h-28" src={product.imgUrl} alt={`image ${product.name}`} />
                        </div>
                        <div className="border"></div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Fruits;

