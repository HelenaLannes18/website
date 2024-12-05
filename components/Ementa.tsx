import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
// import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";


const Pricing = () => {

    return (
        <div
            className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
            id="pricing"
        >
            <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full">

                    <motion.h3
                        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
                    >
                        Ementa do Curso
                    </motion.h3>
                    <motion.p
                        className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center py-10"
                    >
                        A ementa do curso abrange uma introdução à modelagem computacional, passando por técnicas para resolver equações diferenciais, e avançando para a programação paralela e a programação em GPUs. Os alunos terão a oportunidade de trabalhar em modelos de EDOs (Equações Diferenciais Ordinárias) e EDPs (Equações Diferenciais Parciais), além de realizar apresentações de trabalho baseadas nesses temas.
                    </motion.p>


                </div>
            </div>
        </div>
    );
};

export default Pricing;