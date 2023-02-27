import Menu from '../assets/Menu'
import { OrderContext } from './orderContext'
import { useContext } from 'react'

const OrderPageMenu = () => {

  const MenuMapper = (items) => {
    const { id, itemName, image, price} = items
    const { addToOrder } = useContext(OrderContext)
    return (
        <div key={id} className="order-menu-container">
            <div  className="order-menu">
                <img src={image} alt={itemName}/>
                <h2>{itemName}</h2>
                <p>${price}</p>
            </div>
            <button onClick={() => addToOrder(id)} >Add To Order</button>
        </div>
    )
}
  return (
    <div className='order'>
      <h1>Appetizers</h1>
      <div className="order-items">
        {Menu.filter((item) => (item.type === "Appetizer")).map((item) => (MenuMapper(item)))}
      </div>
      <hr style={{width: "70%"}} />
      <h1>Main Menu</h1>
      <div className="order-items">
        {Menu.filter((item) => (item.type === "Main")).map((item) => (MenuMapper(item)))}
      </div>
      <hr style={{width: "70%"}} />
      <h1>Drinks</h1>
      <div  className="order-items">
        {Menu.filter((item) => (item.type === "drinks")).map((item) => (MenuMapper(item)))}
      </div>
      <hr style={{width: "70%"}} />
      <h1>*All alcoholic beverages are prohibited from take-out and delivery</h1>
</div>
  )
}

export default OrderPageMenu