import React from 'react';

function Header({ title, category }) {
    return (
        <header>
            <p className="text-gray-400">{category}</p>
            <p className="mt-2 text-3xl font-extrabold">{title}</p>
        </header>
    );
}

export default Header;
