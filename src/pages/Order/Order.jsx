import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import OrderCardRow from "./OrderCardRow";


const Order = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    console.log(orders);
    return (
        <div className="overflow-x-auto max-w-6xl mx-auto my-8">
        <table className="table">
            {/* head */}
            <thead className="font-bold text-black">
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Order Time</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Origin</th>
                    <th>Delete</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    orders.map(order => <OrderCardRow key={order._id} order={order} orders={orders} setOrders={setOrders} ></OrderCardRow>)
                }
            </tbody>
        </table>
    </div>
    );
};

export default Order;