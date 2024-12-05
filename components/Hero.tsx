import React, { useMemo } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import ButtonPrimary from "../misc/ButtonPrimary";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import { Button } from "@material-tailwind/react";

const Hero = ({
    listUser = [
        {
            name: "Engenharia Computacional",
            icon: "/assets/bx_bxs-server.svg",
        },
        {
            name: "Ciência da Computação",
            icon: "/assets/bx_bxs-server.svg",
        },
        {
            name: "Sistemas de Informação",
            icon: "/assets/bx_bxs-server.svg",
        },
    ],
}) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
            id="about"
        >
            {/*@ts-ignore*/}
            <ScrollAnimationWrapper>
                <motion.div
                    className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
                    variants={scrollAnimation}>
                    <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                            Seminários V  <strong>(DCC101)</strong>
                        </h1>
                        <p className="text-black-500 mt-4 mb-6">
                            Professor: Rodrigo Weber dos Santos | Período: 2024.3
                        </p>
                        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300 ease-in-out">
                            Saiba Mais
                        </button>

                    </div>
                    <div className="flex w-full">
                        <motion.div className="h-full w-full" variants={scrollAnimation}>
                            <Image
                                src="/assets/Illustration1.png"
                                alt="VPN Illustrasi"
                                quality={100}
                                width={612}
                                height={383}
                                layout="responsive"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </ScrollAnimationWrapper>
            <div className="relative w-full flex">
                <ScrollAnimationWrapper
                    className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
                    {listUser.map((listUsers, index) => (
                        <motion.div
                            className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                            key={index}
                            custom={{ duration: 2 + index }}
                            variants={scrollAnimation}
                        >
                            <div className="flex mx-auto w-40 sm:w-auto">
                                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                                    <img src={listUsers.icon} className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl text-black-600 font-bold">
                                        Curso
                                    </p>
                                    <p className="text-lg text-black-500">{listUsers.name}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </ScrollAnimationWrapper>
                <div
                    className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
                    style={{ filter: "blur(114px)" }}
                ></div>
            </div>
        </div>
    );
};

export default Hero;