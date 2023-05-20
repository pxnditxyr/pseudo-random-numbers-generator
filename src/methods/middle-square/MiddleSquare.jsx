import React, { useState } from 'react';
import { ResultsTableMiddleSquare } from './ResultsTableMiddleSquare';
import { useForm } from '../../hooks';
import { getMiddleSquare } from '../../helpers';

import './middleSquare.css'

export const MiddleSquare = () => {

    const [ solved, setSolved ] = useState( false );
    const [ table, setTable ] = useState({});

    const [ { semilla, cantidad }, handleInputChange ] = useForm({
        semilla: "",
        cantidad: "",
    });

    const handleSubmit = ( event ) => {
        event.preventDefault();
        setSolved( true );
        setTable( getMiddleSquare( parseInt( semilla ), parseInt( cantidad ) ) );
    }

    const handleHideClick = ( event ) => {
        setSolved( false );
    };

    return (
        <>

            <div className="">
                <h1 className="text-center"> Numeros Pseudo Aleatorios </h1>
            </div>
            <hr />
            <div className="d-flex justify-content-center">
                <div className="mt-5 jumbotron p-5 text-secondary d-inline-flex flex-column">
                    <h3 className="font-weight-bold text-center display-5"> Cuadrados Medios </h3>
                    <hr />
                    <div className="">
                        <form onSubmit={ handleSubmit }>
                            <div className="form-group">
                                <label> Semilla </label>
                                <input
                                    name="semilla"
                                    type="text"
                                    className="form-control"
                                    placeholder="6345"
                                    onChange={ handleInputChange }
                                />
                                <small className="form-text text-muted"> Debe introducir un numero mayor a 9 </small>
                            </div>
                            <div className="form-group">
                                <label> Cantidad </label>
                                <input
                                    name="cantidad"
                                    type="text"
                                    className="form-control"
                                    placeholder="5"
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <button type="submit" className="btn btn-success"> Generar </button>
                            {
                                solved
                                &&
                                <button className="btn btn-danger ml-3" onClick={ handleHideClick }> Ocultar </button>
                            }
                        </form>
                    </div>
                </div>
            </div>

            {
                solved
                &&
                <ResultsTableMiddleSquare series={ table } />
            }
        </>
    );

};
