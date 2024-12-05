import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
// import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/eva_arrow-next-fill.svg";

const Testimoni = ({
    listTestimoni = [
        {
            name: "Aquisição de Dados:",
            city: "Warsaw",
            country: "Poland",
            rating: "4.5",
            testimoni:
                "A construção de um gêmeo digital começa com a coleta de dados detalhados sobre o sistema físico. Isso pode ser feito por meio de sensores, que medem variáveis como temperatura e pressão, ou por imagens e escaneamentos 3D, especialmente em áreas como saúde e engenharia. Além disso, dados históricos podem ser utilizados para complementar as informações em tempo real. O objetivo é garantir que a réplica digital seja o mais precisa possível, refletindo o sistema real",
        },
        {
            name: "Modelagem Computacional:",
            city: "Warsaw",
            country: "Poland",
            rating: "4.5",
            testimoni:
                "Com os dados coletados, é criado um modelo computacional que representa as propriedades do sistema físico. Esse modelo pode incluir a geometria do objeto, comportamento mecânico, propriedades químicas ou interações biológicas. Por exemplo, em engenharia, pode-se modelar as forças em uma máquina, enquanto na medicina, o modelo pode representar a interação celular. Esse modelo é essencial para simular o comportamento do sistema real",
        },
        {
            name: "Simulação em Tempo Real:",
            city: "Warsaw",
            country: "Poland",
            rating: "4.5",
            testimoni:
                "O gêmeo digital pode simular, em tempo real, o comportamento do sistema físico. Isso permite testar diferentes cenários rapidamente e prever como o sistema reagiria a diversas condições. Por exemplo, no setor da saúde, pode-se simular a resposta de um coração a diferentes tratamentos, sem risco para o paciente. Isso possibilita decisões mais rápidas e eficientes",
        },
        {
            name: "Feedback Contínuo: ",
            city: "Warsaw",
            country: "Poland",
            rating: "4.5",
            testimoni:
                "Sensores no sistema físico enviam dados em tempo real para o gêmeo digital, permitindo ajustes contínuos. Isso garante que o modelo digital esteja sempre atualizado e em sintonia com o sistema real. No setor industrial, por exemplo, isso permite monitorar o desgaste de máquinas, enquanto na saúde, ajusta-se o modelo de um paciente conforme a resposta a tratamentos. A retroalimentação contínua assegura a precisão do gêmeo digital ao longo do tempo",
        },
    ],
}) => {
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
        <>
            <Slider
                {...settings}
                arrows={false}
                ref={setSliderRef}
                className="flex items-stretch justify-items-stretch"
            >
                {listTestimoni.map((listTestimonis, index) => (
                    <div className="px-3 flex items-stretch" key={index}>
                        <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
                            <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                                <div className="flex order-2 xl:order-1">
                                    <div className="flex flex-col ml-5 text-left">
                                        <p className="text-lg text-black-600 capitalize">
                                            {listTestimonis.name}
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
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
        </>
    );
};

export default Testimoni;