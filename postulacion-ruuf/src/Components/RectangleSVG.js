import React from 'react';

const RectangleSVG = ({ values, cantidadRectangulos }) => {
    // Calcula el ancho y alto de cada rectángulo pequeño
    const anchoPanel = parseInt(values.A);
    const altoPanel = parseInt(values.B);

    // Calcula la cantidad de filas y columnas de rectángulos
    const filas = Math.floor(parseInt(values.Y) / altoPanel);
    const columnas = Math.floor(parseInt(values.X) / anchoPanel);

    // Crea un array para almacenar los elementos rectángulo SVG
    const rectangulos = [];

    // Genera los elementos rectángulo SVG
    for (let fila = 0; fila < filas; fila++) {
        for (let columna = 0; columna < columnas; columna++) {
            // Calcula las coordenadas x e y del rectángulo
            const x = columna * anchoPanel;
            const y = fila * altoPanel;

            // Agrega el rectángulo SVG al array
            rectangulos.push(
                <rect
                    key={`${fila}-${columna}`}
                    x={x}
                    y={y}
                    width={anchoPanel}
                    height={altoPanel}
                    fill="pink"
                    stroke="black"
                    strokeWidth="1"
                />
            );
        }
    }

    // Renderiza los rectángulos SVG dentro del SVG principal
    return (
        <svg width={values.X} height={values.Y} style={{ border: '1px solid black' }}>
            {rectangulos}
        </svg>
    );
};

export default RectangleSVG;

