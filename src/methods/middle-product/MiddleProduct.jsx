import React, { useState } from 'react';

import { ResultsTableMiddleProduct } from './ResultsTableMiddleProduct';

import { useForm } from '../../hooks';
import { getMiddleProduct } from '../../helpers';

export const MiddleProduct = () => {

    const [ solved, setSolved ] = useState( false );
    const [ table, setTable ] = useState({});
    const [ equalDigits, setEqualDigits ] = useState( false );

    const [ { semilla1, semilla2, cantidad }, handleInputChange ] = useForm({
        semilla1: "",
        semilla2: "",
        cantidad: "",
    });

    const handleSubmit = ( event ) => {
        event.preventDefault();
        setSolved( true );
        if ( semilla1.length >= 2 && semilla1.length === semilla2.length ) {
            setTable( getMiddleProduct( parseInt( semilla1 ), parseInt( semilla2 ), parseInt( cantidad ) ) );
            setEqualDigits( false );
        } else {
            setEqualDigits( true );
            setSolved( false );
        }

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
                    <h3 className="font-weight-bold text-center display-5"> Algoritmo de los <br /> Productos medios </h3>
                    <hr />
                    <div className="">
                        {
                            equalDigits
                            &&
                            <div className="alert alert-danger" role="alert">
                                Los numeros deben de ser <a className="alert-link"> de dos digitos o mayor ambos de la misma cantidad </a> de digitos.
                            </div>
                        }
                        <form onSubmit={ handleSubmit }>
                            <div className="form-group">
                                <label> Semilla 1 </label>
                                <input
                                    name="semilla1"
                                    type="text"
                                    className="form-control"
                                    placeholder="6345"
                                    onChange={ handleInputChange }
                                />
                                <small className="form-text text-muted"> Debe introducir un numero mayor a 9 </small>
                            </div>

                            <div className="form-group">
                                <label> Semilla 2 </label>
                                <input
                                    name="semilla2"
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
                <ResultsTableMiddleProduct series={ table } />
            }
        </>
    );
};

