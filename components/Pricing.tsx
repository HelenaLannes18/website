import React, { useMemo, useState } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
// import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import Cronograma from "./Cronograma";
import Slider from "react-slick";
import ArrowBack from "../public/assets/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/eva_arrow-next-fill.svg";
import { PostProps } from "./Post";
import { GetStaticProps } from "next";
import prisma from '../lib/prisma';

export const getStaticProps: GetStaticProps = async () => {
    const feed = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true },
            },
        },
    });



    return {
        props: { feed },
        revalidate: 10,
    };
};


type Props = {
    feed: PostProps[]
}
const Pricing: React.FC<Props> = ({ feed }) => {

    const settings = {
        dots: true,
        customPaging: function (i) {
            return (
                <a className="">
                    <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
                </a>
            );
        },
        dotsClass: "slick-dots w-max absolute mt-20  ",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const [sliderRef, setSliderRef] = useState(null);

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
                        Temas da Disciplina
                    </motion.h3>
                    <motion.p
                        className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
                    >
                        Aqui, vamos detalhar os principais temas abordados ao longo do curso, com foco nas metodologias e tecnologias utilizadas.
                    </motion.p>

                    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
                        <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-6 px-8 lg:px-14 xl:px-20"
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: .2
                                    }
                                }}
                            >
                                <p className="text-2xl lg:text-3xl text-black-600 font-medium capitalize my-4 sm:my-8">
                                    Introdução à Modelagem Computacional e Computação Paralela
                                </p>
                                <p className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow text-lg lg:text-xl">
                                    Na Semana 1, os alunos serão apresentados aos conceitos de modelagem computacional e computação paralela. Serão exploradas ferramentas como o Numba e o WebGL, que são usadas para acelerar o processo de simulação de fenômenos científicos. Durante essa semana, os alunos também apresentarão o primeiro trabalho, uma introdução ao que será aprendido nas próximas semanas.
                                </p>

                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-6 px-8 lg:px-14 xl:px-20"
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: .2
                                    }
                                }}
                            >
                                <p className="text-2xl lg:text-3xl text-black-600 font-medium capitalize my-4 sm:my-8">
                                    Modelos Baseados em Equações Diferenciais Ordinárias (EDOs)
                                </p>
                                <p className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow text-lg lg:text-xl">
                                    Nas semanas 2 a 6, o curso se concentra no uso de Equações Diferenciais Ordinárias (EDOs) para modelar sistemas dinâmicos. O foco será aprender a programar e resolver EDOs utilizando técnicas computacionais, que são fundamentais em áreas como física, biologia e engenharia. Essa parte do curso é prática, com os alunos desenvolvendo modelos e implementando soluções computacionais.
                                </p>

                            </motion.div>
                        </ScrollAnimationWrapper>
                    </div>


                    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
                        <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-6 px-8 lg:px-14 xl:px-20"
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: .2
                                    }
                                }}
                            >
                                <p className="text-2xl lg:text-3xl text-black-600 font-medium capitalize my-4 sm:my-8">
                                    Modelos Baseados em Equações Diferenciais Parciais (EDPs)
                                </p>
                                <p className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow text-lg lg:text-xl">
                                    Nas semanas 7 a 10, os alunos aprenderão sobre Equações Diferenciais Parciais (EDPs), que são ainda mais complexas e usadas para modelar fenômenos que dependem de múltiplas variáveis independentes, como a dinâmica de fluidos ou a propagação de calor. Será dada ênfase à resolução dessas equações com programação paralela, aproveitando o uso de GPUs para acelerar os cálculos.
                                </p>

                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-6 px-8 lg:px-14 xl:px-20"
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: .2
                                    }
                                }}
                            >
                                <p className="text-2xl lg:text-3xl text-black-600 font-medium capitalize my-4 sm:my-8">
                                    Programação em GPUs
                                </p>
                                <p className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow text-lg lg:text-xl">
                                    De semana 11 a 15, o foco será a programação em GPUs (Unidades de Processamento Gráfico), uma tecnologia essencial para simulações científicas de larga escala. O curso explorará como as GPUs podem ser usadas para realizar programação paralela e otimizar a execução de cálculos complexos. As ferramentas e técnicas aprendidas serão aplicadas em projetos práticos, culminando na apresentação dos trabalhos finais.
                                </p>

                            </motion.div>
                        </ScrollAnimationWrapper>
                    </div>
                </div>

                <ScrollAnimationWrapper className="w-full flex flex-col py-8">
                    <motion.div >
                        <Cronograma />
                    </motion.div>
                </ScrollAnimationWrapper>

                <div className="flex flex-col w-full my-16" id="testimoni">

                    <motion.h3
                        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
                        Projetos feitos na Disciplina
                    </motion.h3>
                    <motion.p
                        className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
                    >
                        Ao longo do curso, os alunos desenvolveram projetos práticos aplicando os conceitos de modelagem computacional e computação paralela, utilizando ferramentas como Numba e WebGL, e trabalhando com modelos baseados em EDOs e EDPs.
                    </motion.p>


                    <ScrollAnimationWrapper className="w-full flex flex-col py-12">
                        <motion.div >
                            <Slider
                                {...settings}
                                arrows={false}
                                ref={setSliderRef}
                                className="flex items-stretch justify-items-stretch"
                            >
                                {feed.map((post) => (
                                    <div className="px-3 flex items-stretch" key={post.id}>  {/* Use um identificador único */}
                                        <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
                                            <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                                                <div className="flex order-2 xl:order-1">
                                                    {/* <Image src={post.image} height={50} width={50} alt="Icon People" /> */}
                                                    <div className="flex flex-col ml-5 text-left">
                                                        <p className="text-lg text-black-600 capitalize">
                                                            {post.title}
                                                        </p>
                                                        <p className="text-sm text-black-500 capitalize">
                                                            {post.author.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mt-5 text-left">“{post.content}”</p>
                                        </div>
                                    </div>
                                ))}

                            </Slider>
                            <div className="flex w-full items-center justify-end">
                                <div className="flex flex-none justify-between w-auto mt-14">
                                    <div
                                        className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                                        onClick={() => sliderRef?.slickPrev()}
                                    >
                                        <Image src={ArrowBack} alt="Previous Arrow" width={24} height={24} />
                                    </div>
                                    <div
                                        className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                                        onClick={() => sliderRef?.slickNext()}
                                    >
                                        <Image src={ArrowNext} alt="Next Arrow" width={24} height={24} />
                                    </div>

                                </div>
                            </div>

                        </motion.div>
                    </ScrollAnimationWrapper>

                </div>
            </div>
        </div >
    );
};

export default Pricing;