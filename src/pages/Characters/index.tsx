import React from 'react';
import { Link } from 'react-router-dom';

const Character: React.FC = () => {
    return (
        <>
            <h3>Página Repository</h3>
            <Link to={`/`}>Dasboard</Link>
        </>
    );
}

export default Character;