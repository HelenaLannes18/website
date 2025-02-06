import { motion } from 'framer-motion';
import React, { useEffect, useMemo, useRef } from 'react';
import getScrollAnimation from "../utils/getScrollAnimation";
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import { LiveProvider, LiveEditor, LiveError } from 'react-live';

// Evita erro de SSR no Next.js
const LiveEditorNoSSR = dynamic(() => import('react-live').then(mod => mod.LiveEditor), { ssr: false });

// Código HTML + JavaScript injetado no editor
const initialCode = `
(() => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    
    container.innerHTML = \`
        <h1>Sistema Imune Inato</h1>
        <div id="controls">
            <label for="numAntigens">Antígenos:</label>
            <input type="number" id="numAntigens" value="20" min="1">
            <label for="numNeutrophils">Neutrófilos:</label>
            <input type="number" id="numNeutrophils" value="10" min="1"><br>
            <label for="proliferationRate">Taxa de proliferação (0 a 1):</label>
            <input type="number" id="proliferationRate" value="0.01" step="0.01" min="0" max="1">
            <label for="replenishmentRate">Taxa de reposição (0 a 1):</label>
            <input type="number" id="replenishmentRate" value="0.01" step="0.01" min="0" max="1">
            <button id="startSim">Iniciar Simulação</button>
        </div>
        <div id="counters">
            <p>Antígenos: <span id="antigenCount">0</span></p>
            <p>Neutrófilos: <span id="neutrophilCount">0</span></p>
        </div>
        <canvas id="simulationCanvas" width="800" height="400"></canvas>
    \`;

    let gl;
    let antigens = [];
    let neutrophils = [];
    let animationFrameId;

    function initializeSimulation() {
        const canvas = document.getElementById('simulationCanvas');
        gl = canvas.getContext('webgl2');

        if (!gl) {
            alert('WebGL2 não é suportado no seu navegador.');
            return;
        }

        antigens = createEntities(20, canvas, 'antigen');
        neutrophils = createEntities(10, canvas, 'neutrophil');
        updateCounters();
        startRenderLoop();
    }

    function createEntities(count, canvas, type) {
        const entities = [];
        for (let i = 0; i < count; i++) {
            entities.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                type
            });
        }
        return entities;
    }

    function updateCounters() {
        document.getElementById('antigenCount').textContent = antigens.length;
        document.getElementById('neutrophilCount').textContent = neutrophils.length;
    }

    function startRenderLoop() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        render();
    }

    function render() {
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        animationFrameId = requestAnimationFrame(render);
    }

    window.initializeSimulation = initializeSimulation;
    document.getElementById('startSim').addEventListener('click', initializeSimulation);
})();
`;


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
                        Editor Interativo - Sistema Imune Inato
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
