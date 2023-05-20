import React from 'react';

export const ResultsTableLinearAlgorithm = ({ series }) => {

    const { tableRandomNumbers } = series;

    return (
        <>
            <div className="d-flex justify-content-center">
                
                <div className="mt-5 p-5 d-inline-flex flex-column">
                    <table className="table table-bordered">
                        <thead className="bg-success">
                            <tr>
                                <th scope="col"> i </th>
                                <th scope="col"> Operaciones </th>
                                <th scope="col"> X(i) </th>
                                <th scope="col"> r(i) </th>
                            </tr>
                        </thead>
                    <tbody>
                            {
                                tableRandomNumbers.map( row => (
                                    <tr className="table-success text-center" key={ row.i }>
                                        <th scope="row">{ row.i }</th>
                                        <td>{ row.operaciones }</td>
                                        <td>{ row.xi }</td>
                                        <td>{ row.ri }</td>
                                    </tr>
                                ))
                           }
                           
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </>
    );
};
