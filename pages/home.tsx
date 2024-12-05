import React from 'react';
import { useEffect } from "react";
import Swiper from "swiper";
import Carrossel from '../components/Carrossel';

export default function Home() {
    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full h-[60px] bg-gradient-to-t from-black to-black flex items-center justify-between px-8 z-50 shadow-md">
                <div className="flex items-center">
                    <h3 className="text-white text-xl font-bold">Stanford University</h3>
                </div>
                <div className="flex items-center space-x-6">
                    <h5 className="text-white font-semibold">Information for:</h5>
                    <div className="flex space-x-4">
                        <h5 className="text-[#eeeeee] hover:text-[#b1040e] transition-colors duration-300 cursor-pointer">
                            Students
                        </h5>
                        <h5 className="text-[#eeeeee] hover:text-[#b1040e] transition-colors duration-300 cursor-pointer">
                            Faculty & Staff
                        </h5>
                        <h5 className="text-[#eeeeee] hover:text-[#b1040e] transition-colors duration-300 cursor-pointer">
                            Families
                        </h5>
                        <h5 className="text-[#eeeeee] hover:text-[#b1040e] transition-colors duration-300 cursor-pointer">
                            Alumni
                        </h5>
                    </div>
                </div>
                <button className="flex items-center text-[#eeeeee] space-x-2 hover:text-[#b1040e] transition-colors duration-300">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_3_462)">
                            <path d="M..." fill="#EEEEEE" />
                        </g>
                        <defs>
                            <clipPath id="clip0_3_462">
                                <rect width="17.65" height="19" fill="white" transform="matrix(1 0 0 -1 0.33 19.58)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>Button Text</span>
                </button>
            </nav>

            {/* Main Section */}
            <section className="pt-[61px] w-full bg-white">
                <div
                    className="w-full h-[500px] bg-cover bg-center"
                    style={{ backgroundImage: "url('/imgs/ufjf_3.jpg')" }}
                ></div>

                <div className="flex flex-col items-center py-10">
                    <h1 className="text-center font-black text-[48px] leading-[62px] text-black tracking-[-0.9px]">
                        Modelagem Computacional
                    </h1>
                    <div className="w-full max-w-[1200px] mt-6">
                        <h1 className="text-center font-light text-[27px] leading-[49px] text-black">
                            A modelagem computacional é uma ferramenta essencial...
                        </h1>
                    </div>
                    <div className="mt-10 shadow-md w-[300px] h-[60px] bg-[#b1040e] flex items-center justify-center rounded-full hover:bg-[#9f030a] transition duration-300">
                        <h4 className="text-white font-semibold text-[24px] leading-9">
                            More about Stanford
                        </h4>
                    </div>
                </div>

                <Carrossel />

                {/* Blog Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
                            Latest Blog Posts
                        </h2>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src="/imgs/blog1.jpg" alt="Blog post" className="w-full h-[200px] object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Post Title 1</h3>
                                <p className="text-gray-600 mb-4">
                                    A brief description of the post content. Learn more about this interesting topic...
                                </p>
                                <a href="#" className="text-indigo-700 font-semibold">Read more</a>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src="/imgs/blog2.jpg" alt="Blog post" className="w-full h-[200px] object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Post Title 2</h3>
                                <p className="text-gray-600 mb-4">
                                    A brief description of the post content. This post will give you deeper insights into...
                                </p>
                                <a href="#" className="text-indigo-700 font-semibold">Read more</a>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src="/imgs/blog3.jpg" alt="Blog post" className="w-full h-[200px] object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Post Title 3</h3>
                                <p className="text-gray-600 mb-4">
                                    Discover the best practices for modelagem computacional and its applications...
                                </p>
                                <a href="#" className="text-indigo-700 font-semibold">Read more</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="py-16 bg-indigo-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">What People Are Saying</h2>
                        <div className="flex justify-center space-x-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <p className="text-gray-600 mb-4">"This has transformed my learning experience! The modelagem computacional tools are incredible!"</p>
                                <h4 className="font-semibold text-gray-800">John Doe</h4>
                                <p className="text-gray-500">Student</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <p className="text-gray-600 mb-4">"I highly recommend this to all faculty members. It's a game changer in research!"</p>
                                <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                                <p className="text-gray-500">Faculty</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <footer className="footer bg-neutral text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </>
    );
}
