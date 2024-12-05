import Router from "next/router";
import { useEffect } from "react";
import Swiper from "swiper";

export type PostProps = {
    id: string;
    title: string;
    author: {
        name: string;
        email: string;
    } | null;
    content: string;
    published: boolean;
};


const BlogCarousel: React.FC<{ post: PostProps }> = ({ post }) => {
    useEffect(() => {
        // Inicialize o Swiper quando o componente for montado
        new Swiper(".mySwiper", {
            slidesPerView: 2,  // Exibe 2 slides por vez
            spaceBetween: 16,  // Espaço entre os slides
            navigation: {
                nextEl: "#slider-button-right",
                prevEl: "#slider-button-left",
            },
            breakpoints: {
                // Responsividade: exibe 1 slide em telas menores
                640: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                },
            },
        });
    }, []);

    return (
        <>


            <div className="swiper-slide group" onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
                <div className="flex items-center mb-9">
                    <img
                        src="https://pagedone.io/asset/uploads/1696244059.png"
                        alt="blogs tailwind section"
                        className="rounded-2xl w-full object-cover"
                    />
                </div>
                <h3 className="text-xl text-black-400 font-medium leading-8 mb-4 group-hover:text-orange-500">
                    {post.title}
                </h3>
                <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia dui eu lorem euismod, ac tincidunt turpis tincidunt. Curabitur sit amet tristique elit.
                </p>
                <a
                    href="javascript:;"
                    className="cursor-pointer flex items-center gap-2 text-lg text-blue-500 font-semibold"
                >
                    Ler mais
                    <svg
                        width={15}
                        height={12}
                        viewBox="0 0 15 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                            stroke="#3487C6"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </div>


        </>
    );
};

export default BlogCarousel;
