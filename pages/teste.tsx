import { motion } from 'framer-motion';
import React, { useEffect, useMemo, useRef } from 'react';
import getScrollAnimation from "../utils/getScrollAnimation";
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import { LiveProvider, LiveEditor, LiveError } from 'react-live';

// Evita erro de SSR no Next.js
const LiveEditorNoSSR = dynamic(() => import('react-live').then(mod => mod.LiveEditor), { ssr: false });

// Código inicial para testar com WebGL
const initialCode = `
const rows = 100;
const cols = 100;
let matrix = [];

// Inicializa o WebGL
function main() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = 800;
    canvas.height = 800;
    
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
        alert('Seu navegador não suporta WebGL');
        return;
    }

    // Define os shaders
    const vsSource = \`
        attribute vec4 aVertexPosition;
        void main() {
            gl_Position = aVertexPosition;
        }
    \`;

    const fsSource = \`
        void main() {
            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }
    \`;

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error('Erro ao inicializar o programa shader: ' + gl.getProgramInfoLog(shaderProgram));
        return;
    }

    gl.useProgram(shaderProgram);

    // Inicializa a matriz
    function generateMatrix() {
        matrix = Array.from({ length: rows }, () => 
            Array.from({ length: cols }, () => Math.floor(Math.random() * 2))
        );
    }

    generateMatrix();
    animate(gl, shaderProgram);
}

// Função para compilar shaders
function compileShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Erro ao compilar shader: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

function update(cell, neighbors) {
    const nNeighbors = neighbors.reduce((sum, val) => sum + val, 0);

    if (cell === 1) {
        if (nNeighbors > 3 || nNeighbors < 2) {
            return 0;
        }
    } else if (cell === 0) {
        if (nNeighbors === 3) {
            return 1;
        }
    }
    return cell;
}

function updateMatrix(matrix) {
    let newMatrix = matrix.map(arr => [...arr]);

    for (let i = 1; i < rows - 1; i++) {
        for (let j = 1; j < cols - 1; j++) {
            let neighbors = [
                matrix[i-1][j-1], matrix[i-1][j], matrix[i-1][j+1],
                matrix[i][j-1], matrix[i][j+1],
                matrix[i+1][j-1], matrix[i+1][j], matrix[i+1][j+1]
            ];
            newMatrix[i][j] = update(matrix[i][j], neighbors);
        }
    }
    return newMatrix;
}

// Função de animação
function animate(gl, shaderProgram) {
    // Limpa a tela
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Fundo preto
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    matrix = updateMatrix(matrix)
    for (let i = -50; i < 50; i++) {
        for (let j = -50; j < 50; j++) {
            if (matrix[i + 50][j + 50] == 1)
                drawSquare(gl, shaderProgram, i / 50 + 0.01, j / 50+0.01);
        }
    }

    // Define um intervalo de 100ms (10 FPS)
    setTimeout(() => {
        requestAnimationFrame(() => animate(gl, shaderProgram));
    }, 100); // Ajuste o valor para controlar a velocidade}
}

// Função para desenhar um quadrado
function drawSquare(gl, shaderProgram, offsetX, offsetY) {
    const size = 0.01;
    const vertices = new Float32Array([
        -size + offsetX,  size + offsetY,
        -size + offsetX, -size + offsetY,
        size + offsetX, -size + offsetY,
        size + offsetX,  size + offsetY
    ]);

    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const vertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
    gl.enableVertexAttribArray(vertexPosition);
    gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);

    const indices = new Uint16Array([0, 1, 2, 0, 2, 3]);
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
}

main();
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
