import {motion} from "framer-motion"
import img1 from "../assets/e39.jpg"
import img2 from "../assets/FJ55 PS1.png"
import img3 from "../assets/Landu Roper 5.png"
import img4 from "../assets/NoSignalTV Photoshoot 1.png"
import img5 from "../assets/Vending Machine.png"
import img6 from "../assets/BeautyS1S60207.png"
import img7 from "../assets/kumpulanporto/A7III Photoshot 2.png"
import img8 from "../assets/kumpulanporto/A7SceneLocation Photoshoot 1.png"
import img9 from "../assets/kumpulanporto/BBSLM.png"
import img10 from "../assets/kumpulanporto/BeautyS8SADDON0090.png"
import img11 from "../assets/kumpulanporto/HALAMAN 12-13.png"
import img12 from "../assets/kumpulanporto/TAULAH 512.png"
import img13 from "../assets/kumpulanporto/Test.png"
import img14 from "../assets/kumpulanporto/Vela A Kota Jakarta.png"
import img15 from "../assets/kumpulanporto/Vela Shot 38.png"




function Content() {
    return (
        <div className="description" id="portofolio">
            <motion.p className="portofoliotext"
                initial={{
                    opacity: 0,
                    translateY: -30,

                }}
                transition={{ 
                    delay: 0.5
                }}
                whileInView={{
                    opacity: 1,
                    translateY: 0,
                    color: "#EEEDEB"
                }}
            >
                PORTOFOLIO</motion.p>
            <div className="carousel">
                <img className="carousel1" src={img1} alt="e39" />
                <img className="carousel1" src={img2} alt="FJ55" />
                <img className="carousel1" src={img4} alt="LandRover" />
                <img className="carousel1" src={img3} alt="Nosignal" />
                <img className="carousel1" src={img5}alt="Vending" />
                <img className="carousel1" src={img6}alt="Vela" />
                <img className="carousel1" src={img7}alt="Vela" />
                <img className="carousel1" src={img8}alt="Vela" />
                <img className="carousel1" src={img9}alt="Vela" />
                <img className="carousel1" src={img11}alt="Vela" />
                <img className="carousel1" src={img10}alt="Vela" />
                <img className="carousel1" src={img12}alt="Vela" />
                <img className="carousel1" src={img15}alt="Vela" />
                <img className="carousel1" src={img13}alt="Vela" />
                <img className="carousel1" src={img14}alt="Vela" />
            </div>
        </div>
    )
}
export default Content