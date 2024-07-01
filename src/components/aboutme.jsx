import { color } from "framer-motion"
import { motion, useInView } from "framer-motion";


function Aboutme() {
    return (
        <div className="aboutme" id="aboutme">
            <motion.div className="judulaboutme"
                initiall={{
                    opacity: 0,
                    translat: -30
                }}
                transition={{
                    delay: 0.5
                }}
                whileInView={{
                    opacity: 1,
                    translateY: -20
                }}
            >ABOUT ME!</motion.div>
            <motion.div className="descriptionaboutme"
                initial={{
                    opacity: 0,
                    translateY: -30
                }}
                transition={{
                    delay: 0.5
                }}
                whileInView={{
                    opacity: 1,
                    translateY: -20
                }}            
            >
                Saya adalah seorang Motion Designer/3D Generalist lulus dibidang desain, menyemplung di dunia 3D sejak 2019 dan masuk kedalam ranah professional kurang lebih 1 tahun kebelakang. Saat ini sedang mendalami ilmu Full-Stack Web Development mempelajari fundamental, front-end serta back-end. Menggabungkan dunia design dan webdev/mobileapp merupakan sesuatu yang sangat saya suka terlebih jika hasil yang kita buat terlihat sangat immersive membuat satisfaction tersendiri dan akan ku taklukan dunia perkodingan ini dan akan menjadi tim pusat Purwadikhap, XIXIXIXI!

                <p><code className="texteditor">
                    if(webdev + design === immersive) result = "Satisfaction"
                </code></p>
            </motion.div>
            <motion.div className="aboutskill"
                initial={{
                    opacity: 0,
                    translateX: -100
                }}
                transition={{ delay: 1 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0
                }}
            >SKILL</motion.div>
            <div className="skillratio">
                <div className="designratio">
                    <motion.p className="blenderskill"
                        initial={{
                            opacity: 0,
                            translateX: -100
                        }}
                        transition={{ delay: 1 }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                    >BLENDER</motion.p>
                    <motion.div
                        className="motion1"
                        initial={{
                            opacity: 0,
                            translateX: -100
                        }}
                        transition={{ delay: 1 }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                    />
                    <motion.p className="blenderskill"
                        initial={{
                            opacity: 0,
                            translateX: -100
                        }}
                        transition={{ delay: 1 }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                    >Adobe Family</motion.p>
                    <motion.div
                        className="motion2"
                        initial={{
                            opacity: 0,
                            translateX: -100
                        }}
                        transition={{ delay: 1 }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                    />
                    <motion.p className="blenderskill"
                        initial={{
                            opacity: 0,
                            translateX: -100
                        }}
                        transition={{ delay: 1 }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                    >EMBERGEN</motion.p>
                    <motion.div
                        className="motion3"
                        initial={{
                            opacity: 0,
                            translateX: -100
                        }}
                        transition={{ delay: 1 }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                    />
                    <motion.p className="blenderskill"
                        initial={{
                            opacity: 0,
                            translateX: -100
                        }}
                        transition={{ delay: 1 }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                    >SKETCHUP</motion.p>
                    <motion.div
                        className="motion4"
                        initial={{
                            opacity: 0,
                            translateX: -100
                        }}
                        transition={{ delay: 1 }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                    />
                </div>
                <div>
                <motion.p className="blenderskill"
                    initial={{
                        opacity: 0,
                        translateX: -100
                    }}
                    transition={{ delay: 1 }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0
                    }}
                >JavaScrip</motion.p>
                <motion.div
                    className="motion5"
                    initial={{
                        opacity: 0,
                        translateX: -100
                    }}
                    transition={{ delay: 1 }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0
                    }}
                />
                <motion.p className="blenderskill"
                    initial={{
                        opacity: 0,
                        translateX: -100
                    }}
                    transition={{ delay: 1 }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0
                    }}
                >HTML & CSS</motion.p>
                <motion.div
                    className="motion6"
                    initial={{
                        opacity: 0,
                        translateX: -100
                    }}
                    transition={{ delay: 1 }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0
                    }}
                /> 
                
                </div>
            </div>
        </div>
    )
}

export default Aboutme