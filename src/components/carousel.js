import { useState } from "react"
import CarouselData from "./carouselData"
import "../App.css"
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi"

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0)

    const leftClick = () => {
        if (currentImage === 0) {
            return setCurrentImage(CarouselData.length - 1)
        } else {
            return setCurrentImage(currentImage - 1)
        }
    }
    const rightClick = () => {
        if (currentImage === (CarouselData.length - 1)) {
            return setCurrentImage(0)
        } else {
            return setCurrentImage(currentImage + 1)
        }
    }
    return (
        <div className="outerLayer">
            <img src={CarouselData[currentImage].image} alt={CarouselData[currentImage].id} />
            <p className="buttonLeft" onClick={leftClick}><FiArrowLeftCircle /></p>
            <p className="buttonRight" onClick={rightClick}><FiArrowRightCircle /></p>
        </div>
    )
}

export default Carousel