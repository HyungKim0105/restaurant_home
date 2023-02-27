import { useContext } from "react"
import Menu from "../assets/Menu"
import { OrderContext } from "./orderContext"
import OrderCartItem from "./OrderCartItem"

const OrderCart = () => {
    const { orderItems, getTotalOrder, resetOrder } = useContext(OrderContext)

    const total = getTotalOrder()

    return (
        <div className="ordercart">
            <div>
                <h1>Your Order</h1>
                {Menu.map((items) => {
                    if (orderItems[items.id] !== 0) {
                        return <OrderCartItem data={items} />
                    }
                })}
            </div>
            <div className="total-container">
                {total > 0 ?
                    (
                        <div>
                            <div className="subtotal">
                                <h2>Subtotal:</h2>
                                <p>${total.toFixed(2)}</p>
                            </div>
                            <div className="tax">
                                <h2>Tax @8.875:</h2>
                                <p>${(total*.0875).toFixed(2)}</p>
                            </div>
                            <div className="total">
                                <h2>Total:</h2>
                                <p>${(total*1.0875).toFixed(2)}</p>
                            </div>
                            <button onClick={resetOrder}>Submit Order</button>
                        </div>
                    ) :
                    (
                        <div>
                        <h1>Your order is empty</h1>
                        </div>
                        )
                }
            </div>
        </div>
  )
}

export default OrderCart