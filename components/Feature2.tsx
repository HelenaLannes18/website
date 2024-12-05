import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

const features = [
    "Disciplina: Seminários V",
    "Código: DCC101",
    "Turma: A",
    "Professor: Rodrigo Weber dos Santos",
    "Período: 2024.3",
    "Dias e Horário: QUIs, 14h00 às 16h00",
    "Local: Sala LABII, EngComp",
    "Carga Horária: 30 horas (2 horas semanais)"
]

const Feature = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
            id="feature"
        >
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
                {/* Scroll Wrapper for Text Content (trocado de posição) */}
                {/*@ts-ignore*/}
                <ScrollAnimationWrapper>
                    <motion.div className="flex flex-col items-start justify-center mr-auto w-full lg:w-9/12" variants={scrollAnimation}>
                        <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                            Informações Gerais:
                        </h3>

                        <ul className="text-black-500 self-start list-inside mr-8 py-10">
                            {features.map((feature, index) => (
                                <motion.li
                                    className="relative circle-check custom-list"
                                    custom={{ duration: 2 + index }}
                                    variants={scrollAnimation}
                                    key={feature}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            duration: .2
                                        }
                                    }}>
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </ScrollAnimationWrapper>

                {/* Scroll Wrapper for the Image (imagem trocada de posição) */}
                <ScrollAnimationWrapper className="flex w-full justify-start">
                    <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
                        <Image
                            src="/imgs/sala.jpg"
                            alt="VPN Illustrasi"
                            layout="responsive"
                            quality={100}
                            height={414}
                            width={508}
                        />
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default Feature;
