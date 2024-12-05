import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout";
import Modelagem from "../components/Modelagem";
import Feature2 from "../components/Feature2";
import Ementa from "../components/Ementa";
import React, { useMemo, useState } from "react";
import Image from "next/image";
// import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import Cronograma from "../components/Cronograma";
import Slider from "react-slick";
import ArrowBack from "../public/assets/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/eva_arrow-next-fill.svg";
import Post, { PostProps } from "../components/Post";
import { GetStaticProps } from "next";
import prisma from '../lib/prisma';
import Post_2 from "../components/Post_2";
import BlogCarousel from "../components/Carrossel";

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

const Blog: React.FC<Props> = (props) => {

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
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .swiper-button-prev:after,
      .swiper-rtl .swiper-button-next:after {
        content: '' !important;
      }

      .swiper-button-next:after,
      .swiper-rtl .swiper-button-prev:after {
        content: '' !important;
      }

      .swiper-button-next svg,
      .swiper-button-prev svg {
        width: 24px !important;
        height: 24px !important;
      }

      .swiper-button-next,
      .swiper-button-prev {
        position: relative !important;
      }

      .swiper-slide.swiper-slide-active {
        --tw-border-opacity: 1 !important;
        border-color: rgb(249 115 22 / var(--tw-border-opacity)) !important; /* orange-500 */
      }

      .swiper-slide.swiper-slide-active>.swiper-slide-active\\:text-orange-500 {
        --tw-text-opacity: 1;
        color: rgb(249 115 22 / var(--tw-text-opacity)); /* orange-500 */
      }

      .swiper-slide.swiper-slide-active>.flex .grid .swiper-slide-active\\:text-orange-500 {
        --tw-text-opacity: 1;
        color: rgb(249 115 22 / var(--tw-text-opacity)); /* orange-500 */
      }

      /* Ajuste para garantir que os slides fiquem lado a lado */
      .swiper-wrapper {
        display: flex;
        gap: 16px; /* Espaçamento entre os cards */
      }

      .swiper-slide {
        flex: 1 0 48%; /* Cada slide ocupa aproximadamente metade do espaço disponível */
      }
    `,
        }}
      />

      <SeoHead title='Seminario V' />
      <Layout>
        <Hero />
        <Modelagem />
        <Feature />
        <Feature2 />
        <Ementa />
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
                  <section className="py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                      <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
                        <div className="w-full flex justify-between flex-col lg:w-2/5">
                          <div className="block lg:text-left text-center">
                            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">
                              Últimos <span className=" text-orange-500">Projetos</span>
                            </h2>
                            <p className="text-gray-500 mb-10 max-lg:max-w-xl max-lg:mx-auto">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia dui eu lorem euismod, ac tincidunt turpis tincidunt. Curabitur sit amet tristique elit.
                            </p>
                            <a
                              href="javascript:;"
                              className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100"
                            >
                              Ver Todos
                            </a>
                          </div>
                          {/* Slider controls */}
                          <div className="flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
                            <button
                              id="slider-button-left"
                              className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
                              data-carousel-prev=""
                            >
                              <svg
                                className="h-6 w-6 text-orange-500 group-hover:text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                            <button
                              id="slider-button-right"
                              className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
                              data-carousel-next=""
                            >
                              <svg
                                className="h-6 w-6 text-orange-500 group-hover:text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="w-full lg:w-3/5">
                          {/* Slider wrapper */}
                          <div className="swiper mySwiper">
                            <div className="swiper-wrapper">

                              {props.feed.map((post) => (
                                // <Post_2 post={post} />
                                <BlogCarousel post={post} />


                              ))}

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>





                </motion.div>
              </ScrollAnimationWrapper>

            </div>
          </div>
        </div >
      </Layout>
    </>
  );
}

export default Blog