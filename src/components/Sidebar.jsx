import { useState } from 'react';
import { MiddleProduct, MiddleSquare, LinearAlgorithm, MultiplicativeAlgorithm } from '../methods';

import './sidebar.css';

export const Sidebar = () => {

    const [ currentPage, setCurrentPage ] = useState( "middle-square" );

    const handleClick = ({ target }) => {
        setCurrentPage( target.name.toString() );
    };

    const pages = {
        "middle-square": <MiddleSquare />,
        "middle-product": <MiddleProduct />,
        "linear-algorithm": <LinearAlgorithm />,
        "multiplicative-algorithm": <MultiplicativeAlgorithm />,
    };

    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar-logo">
                    Algoritmos de Numeros Pseudo Aleatorios
                </div>
                <ul className="sidebar-navigation">
                    <li className="header"> No congruenciales </li>
                    <li>
                        <button name="middle-square" onClick={ handleClick }>
                            <i className="fa fa-home" aria-hidden="true"></i> Algoritmo de los cuadrados medios
                        </button>
                    </li>
                    <li>
                        <button name="middle-product" onClick={ handleClick }>
                            <i className="fa fa-tachometer" aria-hidden="true"></i> Algoritmo de los productos medios
                        </button>
                    </li>
                    <li className="header"> Congruenciales </li>
                    <li>
                        <button name="linear-algorithm" onClick={ handleClick }>
                            <i className="fa fa-users" aria-hidden="true"></i> Algoritmo lineal
                        </button>
                    </li>
                    <li>
                        <button name="multiplicative-algorithm" onClick={ handleClick }>
                            <i className="fa fa-cog" aria-hidden="true"></i> Algoritmo Multiplicativo
                        </button>
                    </li>
                </ul>
            </div>
            <div className="content-container">
                <div className="container-fluid">
                    {
                        pages[ currentPage ]
                    }
                </div>
            </div>
        </>
    );
};
