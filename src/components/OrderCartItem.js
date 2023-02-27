import { useContext } from "react"
import { OrderContext } from "./orderContext"

const OrderCartItem = (props) => {
    const { id, itemName, image, price} = props.data
    const { orderItems, addToOrder, removeFromOrder, updateOrderCount } = useContext(OrderContext)
    return (
        <div className="ordercart-items">
            <img src={image} alt={image}/>
            <div className="itemName-container">
            <p>{itemName}</p>
            </div>
            <div className="price-container">
            <p>${price}</p>
            </div>
            <div className="orderButton-container">
            <button onClick={() => removeFromOrder(id)}>-</button>
            <input value={orderItems[id]} onChange={(e) => updateOrderCount(Number(e.target.value),id)} />
            <button onClick={() => addToOrder(id)}>+</button>
            </div>
        </div>
    )
}

export default OrderCartItem
