import OrderPageMenu from "../components/orderPageMenu"
import OrderCart from "../components/orderCart"


const OrderPage = () => {


    return (
        <div className="order-page-container">
            <OrderPageMenu className="orderselect"/>
            <hr />
            <OrderCart  className="subtotal"/>
        </div>
    )
}

export default OrderPage