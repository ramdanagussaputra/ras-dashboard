import React from 'react';

function Buttons({ icon, size, text, borderRadius, color, bgColor }) {
    return (
        <button
            className={`text-${size} rounded-${borderRadius} p-3 duration-100 hover:shadow-lg`}
            style={{
                color,
                backgroundColor: bgColor,
            }}
        >
            {icon}
            {text}
        </button>
    );
}

export default Buttons;
