import { createContext, useState } from "react"
import Menu from "../assets/Menu.js"

export const OrderContext = createContext(null);

const getDefaultItems = () => {
    let order = {}
    for (let i = 0; i < Menu.length; i++) {
        order[i] = 0
    }
   return order
}

const OrderContextProvider = (props) => {
    const [orderItems, setOrderItems] = useState(getDefaultItems());

    const getTotalOrder = () => {
        let total = 0
        for (const item in orderItems) {
            if (orderItems[item] > 0 ) {
                let itemInfo = Menu.find((x) => x.id === Number(item))
                total += orderItems[item] * itemInfo.price
                
            }
        }
        return total
    }

    const addToOrder = (itemId) => {
        setOrderItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromOrder = (itemId) => {
        setOrderItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }
    const updateOrderCount = (newCount,itemId) => {
        setOrderItems((prev) => ({...prev, [itemId]: newCount}))
    }
    const resetOrder = () => {
        setOrderItems(getDefaultItems())
        alert("Your order has been submitted")
    }
    const contextValue = {orderItems, resetOrder, addToOrder, removeFromOrder, updateOrderCount, getTotalOrder }

  return (
    <OrderContext.Provider value={contextValue}>{props.children}</OrderContext.Provider>
  )
}

export default OrderContextProvider