import React, { useState } from 'react';
import './App.css';
import InputFields from './Components/InputFields';
import RectangleSVG from './Components/RectangleSVG';
import ConfirmButton from './Components/ConfirmButton';

function App() {
    // Estado para los valores de A, B, X e Y
    const [values, setValues] = useState({ A: '', B: '', X: '', Y: '' });
    // Estado para la confirmación de los valores
    const [valoresConfirmados, setValoresConfirmados] = useState(false);

    // Función para manejar el cambio en los campos de entrada
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    // Confirma los valores ingresados por el usuario
    const confirmarValores = () => {
        setValoresConfirmados(true);
    };

    // Función para manejar los cambios de datos por consola
    const handleConsoleInput = (inputValues) => {
        setValues(inputValues);
        confirmarValores(); // Confirma automáticamente los valores ingresados por consola
    };

    // Calcula la cantidad óptima de rectángulos que caben
    const calcularCantidadOptima = () => {
        if (!valoresConfirmados) return null;

        const anchoTecho = parseInt(values.X);
        const altoTecho = parseInt(values.Y);
        const anchoPanel = parseInt(values.A);
        const altoPanel = parseInt(values.B);

        let mejorCantidad = 0;
        let mejorOrientacion = '';

        // Calcula la cantidad de rectángulos en la orientación original
        const cantidadOriginal = Math.floor(anchoTecho / anchoPanel) * Math.floor(altoTecho / altoPanel);
        if (cantidadOriginal > mejorCantidad) {
            mejorCantidad = cantidadOriginal;
            mejorOrientacion = 'original';
        }

        // Calcula la cantidad de rectángulos en la orientación rotada
        const cantidadRotada = Math.floor(anchoTecho / altoPanel) * Math.floor(altoTecho / anchoPanel);
        if (cantidadRotada > mejorCantidad) {
            mejorCantidad = cantidadRotada;
            mejorOrientacion = 'rotada';
        }

        return { cantidad: mejorCantidad, orientacion: mejorOrientacion };
    };

    // Muestra la aplicación
    return (
        <div className="General">
            {/* Componente para los campos de entrada */}
            <InputFields values={values} handleChange={handleChange} />

            {/* Componente del botón de confirmación */}
            <ConfirmButton onClick={confirmarValores} />

            {/* Mostrar la cantidad óptima de rectángulos */}
            {valoresConfirmados && (
                <h1>
                    Cantidad óptima de rectángulos pequeños que caben: {calcularCantidadOptima().cantidad}
                </h1>
            )}

            {/* Console.log con el resultado */}
            {valoresConfirmados && console.log("Resultado:", calcularCantidadOptima())}

            {/* Componente para mostrar el dibujo de los rectángulos */}
            {valoresConfirmados && <RectangleSVG values={values} cantidadRectangulos={calcularCantidadOptima().cantidad} />}
        </div>
    );
}

export default App;
