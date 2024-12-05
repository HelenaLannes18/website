import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
// import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";


const Pricing = () => {

    return (
        <div
            className="bg-gradient-to-b from-white-300 to-white-500 w-full "
            id="pricing"
        >
            <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full">

                    <motion.h3
                        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
                    >
                        Avaliações e Cronograma
                    </motion.h3>
                    <motion.p
                        className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center py-4"
                    >
                        O desempenho dos alunos será avaliado com base em três apresentações de trabalhos individuais, uma para cada unidade do curso. O cronograma de avaliações é o seguinte:
                    </motion.p>

                    <motion.p
                        className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center py-4"
                    >
                        TVC1: Semana 5 e 6, 100 pontos, apresentação de trabalho (Unidade 1)
                    </motion.p>

                    <motion.p
                        className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center py-10"
                    >
                        TVC2: Semanas 9 e 10, 100 pontos, apresentação de trabalho (Unidade 2)
                    </motion.p>

                    <motion.p
                        className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center py-10"
                    >
                        TVC3: Semanas 14 e 15, 100 pontos, apresentação de trabalho (Unidade 3)
                    </motion.p>


                </div>
            </div>
        </div>
    );
};

export default Pricing;