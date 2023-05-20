import { useState } from 'react';
import { ResultsTableLinearAlgorithm } from './ResultsTableLinearAlgorithm';
import { useForm } from '../../hooks';
import { getLinearAlgorithm } from '../../helpers';


export const LinearAlgorithm = () => {

    const [ solved, setSolved ] = useState( false );
    const [ table, setTable ] = useState({});

    const [ { semilla, cantidad, constanteK, numDigitos }, handleInputChange ] = useForm({
        semilla: "",
        cantidad: "",
        constanteK: "",
        numDigitos: "",
    });

    const handleSubmit = ( event ) => {
        event.preventDefault();
        setSolved( true );
        setTable( getLinearAlgorithm( parseInt( semilla ), parseInt( cantidad ), parseInt( constanteK ), parseInt( numDigitos ) ) );
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
                    <h3 className="font-weight-bold text-center display-5"> Algoritmo Congruencial <br /> Lineal </h3>
                    <hr />
                    <div className="">
                        <form onSubmit={ handleSubmit }>
                            <div className="form-group">
                                <label> Semilla x0 </label>
                                <input
                                    name="semilla"
                                    type="text"
                                    className="form-control"
                                    placeholder="6345"
                                    onChange={ handleInputChange }
                                />
                                <small className="form-text text-muted"> Debe introducir un numero mayor a 0 </small>
                            </div>

                            <div className="form-group">
                                <label> Cantidad (Periodo) </label>
                                <input
                                    name="cantidad"
                                    type="text"
                                    className="form-control"
                                    placeholder="10"
                                    onChange={ handleInputChange }
                                />
                            </div>


                            <div className="form-group">
                                <label> Constante K </label>
                                <input
                                    name="constanteK"
                                    type="text"
                                    className="form-control"
                                    placeholder="543"
                                    onChange={ handleInputChange }
                                />
                            </div>

                            <div className="form-group">
                                <label> Numero de digitos deseados </label>
                                <input
                                    name="numDigitos"
                                    type="text"
                                    className="form-control"
                                    placeholder="3"
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
                        {
                            solved
                            &&
                            <>
                                <div class="alert alert-success mt-5" role="alert">
                                    <strong> g = { table.g } </strong>
                                </div>
                                <div class="alert alert-success mt-2" role="alert">
                                    <strong> a = { table.a } </strong>
                                </div>
                            </>
                        }
                        
                    </div>
                </div>
            </div>

            {
                solved
                &&
                <ResultsTableLinearAlgorithm series={ table } />
            }
        </>
    );
};

