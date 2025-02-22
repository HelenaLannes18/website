import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits."
]

const Feature = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
            id="feature"
        >
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
                <ScrollAnimationWrapper className="flex w-full justify-end">
                    <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
                        <Image
                            src="/imgs/ufjf_2.png"
                            alt="VPN Illustrasi"
                            layout="responsive"
                            quality={100}
                            height={414}
                            width={508}
                        />
                    </motion.div>
                </ScrollAnimationWrapper>
                {/*@ts-ignore*/}
                <ScrollAnimationWrapper>

                    <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
                        <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                            Sobre a Disciplina - Seminários V (DCC101)
                        </h3>
                        <p className="my-2 text-black-500 py-10">
                            Objetivo da Disciplina:
                            O curso tem como objetivo apresentar aos alunos as principais abstrações, tecnologias e linguagens utilizadas na programação científica e na programação paralela. Durante o semestre, os alunos aprenderão a aplicar esses conceitos em problemas científicos reais, com foco na resolução de equações diferenciais e na programação para dispositivos gráficos (GPUs).
                        </p>

                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default Feature;