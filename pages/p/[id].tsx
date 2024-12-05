import React, { useMemo } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import { PostProps } from "../../components/Post";
import prisma from "../../lib/prisma";
import { motion } from 'framer-motion'

import Image from "next/image";
import getScrollAnimation from "../../utils/getScrollAnimation";
import Header from "../../components/Header";
import Gemeos from "../../components/Gemeos";


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
};

const Post: React.FC<PostProps> = (props) => {
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <Header />
      <div
        className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
        id="pricing"
      >
        <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <div className="flex flex-col w-full">

            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
              custom={{ duration: 2 }}
              variants={scrollAnimation}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: .2
                }
              }}>
              {title}

            </motion.h2>


            <motion.p
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center py-4"
            >
              O termo gêmeos digitais refere-se à criação de réplicas virtuais de objetos, sistemas ou processos físicos no ambiente digital. Essa tecnologia, inicialmente aplicada na indústria aeroespacial e de manufatura, evoluiu para se tornar uma ferramenta fundamental em diversas áreas, como engenharia, ciência ambiental, saúde e até mesmo nas ciências sociais.

            </motion.p>

            <motion.p
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center py-4"
            >
              Um gêmeo digital é muito mais do que uma mera cópia virtual: ele é uma representação dinâmica que integra dados reais, simulações computacionais e modelos matemáticos para prever o comportamento de sistemas complexos em tempo real.

            </motion.p>


            <Gemeos />

          </div>
        </div>
      </div>

      {/* <motion.div className="flex justify-center items-center w-full px-8 mt-16">
        <Image src="/assets/HugeGlobal.svg" alt="Huge Global" width={700} height={500} />
    </motion.div> */}



    </>
  );
};

export default Post;
