// InputFields.js
import React from 'react';

const InputFields = ({ values, handleChange }) => {
    return (
        <div>
            <label>
                Valor de A:
                <input type="number" name="A" value={values.A} onChange={handleChange} />
            </label>
            <label>
                Valor de B:
                <input type="number" name="B" value={values.B} onChange={handleChange} />
            </label>
            <label>
                Valor de X:
                <input type="number" name="X" value={values.X} onChange={handleChange} />
            </label>
            <label>
                Valor de Y:
                <input type="number" name="Y" value={values.Y} onChange={handleChange} />
            </label>
        </div>
    );
};

export default InputFields;
