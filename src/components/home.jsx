import { motion } from "framer-motion";
import img1 from "../assets/DSC09986.jpg";
import { TypeAnimation } from 'react-type-animation';

function HomeSection() {
    return (
        <div className="mainhomesection">
            <div className='homesection' id="homepage">
                <video loop autoPlay muted className="videobg" >
                    <source src="/Backgroundhome.mp4" type="video/mp4" />
                </video>
                <motion.div className='homename'
                    initial={{
                        opacity: 0,
                        translateX: 30
                    }}
                    transition={{
                        delay: 0.5
                    }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0
                    }}
                >
                    Holla! im <br />
                    <div>
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                                500,
                                "Farraos",  
                                1000,
                                'Farraos Abdillah',
                                1000,
                                'Muhammad Farraos Abdillah',
                                500,
                            ]}
                            speed={10}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="motiondesigner">-Motion Designer & 3D Generalist</div>
                </motion.div>
                <motion.div className="photoditengah"
                    initial={{
                        opacity: 0,
                        translateX: -30
                    }}
                    transition={{
                        delay: 0.5
                    }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0
                    }}
                ><div className="cropingphoto"><img src={img1} alt="" className='pictureprofile' /></div></motion.div>
            </div>
        </div>
    )
}
export default HomeSection