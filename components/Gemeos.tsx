import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
// import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import Gemeos_Exemplos from "./Gemeos_Exemplos";
import Aplicacoes from "./Aplicacoes";


const Pricing = () => {

    return (
        <div
            className="bg-gradient-to-b from-white-300 to-white-500 w-full py-10"
            id="pricing"
        >
            <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">

                <div className="flex flex-col w-full my-16" id="testimoni">

                    <motion.h3
                        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
                        Como Funcionam os Gêmeos Digitais?
                    </motion.h3>
                    <motion.p
                        className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
                    >
                        Um gêmeo digital é uma representação virtual detalhada de um sistema físico real, criada com o objetivo de simular, prever e analisar seu comportamento sob diferentes condições. No contexto da cardiologia, ele consiste em:
                    </motion.p>

                    <ScrollAnimationWrapper className="w-full flex flex-col py-12">
                        <motion.div >
                            <Gemeos_Exemplos />
                        </motion.div>
                    </ScrollAnimationWrapper>

                    <motion.h3
                        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
                        Aplicações dos Gêmeos Digitais em Diferentes Setores
                    </motion.h3>
                    <motion.p
                        className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
                    >
                        Indústria Aeroespacial e Automotiva: Gêmeos digitais são usados para monitorar e prever o desgaste de componentes críticos, como motores de aeronaves e turbinas, otimizando a manutenção preventiva e garantindo segurança operacional.
                    </motion.p>

                    <motion.p
                        className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
                    >
                        Manufatura Avançada: Na indústria, os gêmeos digitais são utilizados para otimizar processos de produção, prever falhas e melhorar a eficiência de fábricas inteligentes, reduzindo desperdícios e aumentando a produtividade.
                    </motion.p>

                    <motion.p
                        className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
                    >
                        Gestão de Infraestruturas: Grandes projetos de infraestrutura, como pontes, edifícios e redes elétricas, utilizam gêmeos digitais para monitoramento estrutural, previsão de falhas e otimização de recursos.
                    </motion.p>

                    <motion.p
                        className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
                    >
                        Ciências da Saúde: Na medicina, os gêmeos digitais estão sendo aplicados para criar representações detalhadas de órgãos humanos, como o coração, permitindo diagnósticos mais precisos e tratamentos personalizados.
                    </motion.p>

                    <motion.p
                        className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
                    >
                        Ciências Climáticas e Ambientais: Gêmeos digitais são usados para modelar o comportamento de ecossistemas e mudanças climáticas, permitindo simulações que auxiliam na tomada de decisões sobre políticas ambientais e sustentabilidade.
                    </motion.p>









                    {/* <Aplicacoes /> */}

                </div>
            </div>
        </div>
    );
};

export default Pricing;