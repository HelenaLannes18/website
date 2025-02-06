import { motion } from 'framer-motion';
import React, { useEffect, useMemo, useRef } from 'react';
import getScrollAnimation from "../utils/getScrollAnimation";
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import { LiveProvider, LiveEditor, LiveError } from 'react-live';

// Evita erro de SSR no Next.js
const LiveEditorNoSSR = dynamic(() => import('react-live').then(mod => mod.LiveEditor), { ssr: false });

// Código inicial para testar
const initialCode = `
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext('2d');

let angle = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const x = 200 + Math.cos(angle) * 100;
    const y = 200 + Math.sin(angle) * 100;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();

    angle += 0.05;
    requestAnimationFrame(draw);
}

draw();
`;

// Componente para rodar código JS puro
const JSRunner = ({ code }) => {
    const scriptRef = useRef(null);

    useEffect(() => {
        if (scriptRef.current) {
            scriptRef.current.remove();
        }

        const script = document.createElement("script");
        script.innerHTML = code;
        scriptRef.current = script;
        document.body.appendChild(script);

        return () => {
            if (scriptRef.current) {
                scriptRef.current.remove();
            }
        };
    }, [code]);

    return <div className="border border-gray-300 p-2">Executando código...</div>;
};

export default function BlogPage() {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <>
            <Header />
            <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
                <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                    <motion.h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
                        custom={{ duration: 2 }}
                        variants={scrollAnimation}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
                        Editor Interativo
                    </motion.h2>

                    <div className="flex flex-col lg:flex-row gap-6 mt-6">
                        <LiveProvider code={initialCode}>
                            <div className="w-full lg:w-1/2 bg-gray-900 text-white p-4 rounded-md">
                                <LiveEditorNoSSR className="text-sm" />
                            </div>
                            <div className="w-full lg:w-1/2 bg-gray-100 p-4 rounded-md">
                                <JSRunner code={initialCode} />
                                <LiveError className="text-red-500 mt-2" />
                            </div>
                        </LiveProvider>
                    </div>
                </div>
            </div>
        </>
    );
}
