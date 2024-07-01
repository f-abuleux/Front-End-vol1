import { motion } from "framer-motion"

function Navbar() {
    return (
            <div className="container-navbar">
                    <motion.a className="forkanavbar" href="#homepage" target=""
                        initial={{
                            opacity: 0,
                            translateX: -30
                        }}
                        transition={{ 
                            delay: 0.25
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                    >FORKAA</motion.a>
                <div className="navbar">
                    <motion.a href="#homepage" className="nav-link home"
                        initial={{
                            opacity: 0,
                            translateX: -30
                        }}
                        transition={{ 
                            delay: 0.75
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                    >Home</motion.a>
                    <motion.a href="#portofolio" className="nav-link portofolio"
                        initial={{
                            opacity: 0,
                            translateX: -30
                        }}
                        transition={{ 
                            delay: 1
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                    >Portofolio</motion.a>
                    <motion.a href="#aboutme" className="nav-link about"
                        initial={{
                            opacity: 0,
                            translateX: -30
                        }}
                        transition={{ 
                            delay: 1.25
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                    >About Me</motion.a>
                    <motion.a href="#contact" className="nav-link contact"
                        initial={{
                            opacity: 0,
                            translateX: -30
                        }}
                        transition={{ 
                            delay: 1.5
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                    >Contact</motion.a>
                </div>
            </div>
    )
}
export default Navbar