import Menu from '../assets/Menu'

const MenuPage = () => {

    const MenuMapper = (data) => {
        const { itemName, image, price} = data
        return (
            <div className="mapper-container">
                <div className="mapper">
                    <img src={image} alt={itemName}/>
                    <h1>{itemName}</h1>
                    <p>$ {price}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="menu-container">
            <h2>Appetizers</h2>
            <div className="appetizer">
                {Menu.filter((item) => (item.type === "Appetizer")).map((item) => (MenuMapper(item)))}
            </div>
            <hr style={{width: "70%"}} />
            <h2>Main Menu</h2>
            <div className="mainmenu">
                {Menu.filter((item) => (item.type === "Main")).map((item) => (MenuMapper(item)))}
            </div>
            <hr style={{width: "70%"}} />
            <h2>Drinks</h2>
            <div className="drink">
                {Menu.filter((item) => (item.type === "drinks")).map((item) => (MenuMapper(item)))}
            </div>
            <hr style={{width: "70%"}} />
            <h2>Beers</h2>
            <div className="beer">
                {Menu.filter((item) => (item.type === "beer")).map((item) => (MenuMapper(item)))}
            </div>
        </div>
    )
}
export default MenuPage