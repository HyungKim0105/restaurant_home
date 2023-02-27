import "@fontsource/anton"
import "@fontsource/shadows-into-light"
import KoreanFc from "../assets/KoreanFC.png"

const Kfc = () => {
  return (
    <div className="kfc">
        <div className="kfcDescription">
            <h1>Korean Fried Chicken</h1>
            <p>The other kind of K.F.C.</p>
            <p>"Crunchiest" and most savory Chicken on the planet</p>
        </div>
        <div className="kimage">
            <img src={KoreanFc} alt="Chicken"/>
        </div>
    </div>
  )
}

export default Kfc