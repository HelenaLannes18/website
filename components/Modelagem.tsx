import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
// import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";


const Pricing = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    return (
        <div
            className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
            id="pricing"
        >
            <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full">

                    <motion.h3
                        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
                        custom={{ duration: 2 }}
                        variants={scrollAnimation}
                        whileHover={{
                            scale: 1.1,
                            transition: {
                                duration: .2
                            }
                        }}>
                        O que é Modelagem Computacional?

                    </motion.h3>


                    <motion.p
                        className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center py-12"
                    >
                        Modelagem Computacional é uma abordagem utilizada para representar fenômenos do mundo real através de modelos matemáticos e simulações computacionais. Em diversas áreas, como física, biologia, economia e engenharia, a modelagem é crucial para entender sistemas complexos que seriam difíceis de analisar manualmente. Ao usar ferramentas computacionais, conseguimos simular cenários e prever comportamentos de sistemas com maior precisão.
                    </motion.p>

                    <motion.p
                        className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
                    >
                        No Seminários V, o foco é a programação científica e paralela, onde os alunos aprenderão a utilizar equações diferenciais e técnicas de programação paralela, aproveitando ao máximo a capacidade computacional dos processadores modernos, especialmente através do uso de GPUs.
                    </motion.p>





                </div>


            </div>
        </div>
    );
};

export default Pricing;