import { useSelector } from "react-redux"

function Orders() {
    const balancia = useSelector(state => state.counter.personalBalance);
    const valua = useSelector(state => state.counter.value);
    
    
    return(
        <>
        <div>
            <h1 className="text-4xl bg-blue-600 py-4 pl-2 text-white">Your Orders Section</h1>
            <div>
                <h1>Your Balance: {balancia}</h1>
                <h1 className="text-red-600">-{valua}</h1>
            </div>
        </div>
        </>
    )
}
export default Orders