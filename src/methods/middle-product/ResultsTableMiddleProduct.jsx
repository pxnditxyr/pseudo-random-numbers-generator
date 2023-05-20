import React from 'react';

export const ResultsTableMiddleProduct = ({ series }) => {

    const { tableRandomNumbers, info } = series;
    const { degenerate, periodRange } = info;
    const { degenerateIndex, amountBucle } = degenerate; 

    return (
        <>

            {
                periodRange === -1 && degenerateIndex === -1
                &&
                <div className="alert alert-success ml-5 mr-5"> Hasta el momento la serie no se degenera </div>
            }
            {
                periodRange !== -1
                &&
                <div className="alert alert-danger ml-5 mr-5"> Su serie tiene un periodo de = { periodRange } </div>
            }

            {
                degenerateIndex !== -1
                &&
                <div className="alert alert-warning ml-5 mr-5"> Su serie se degenera en i = { degenerateIndex } </div>
            }

            {
                amountBucle !== 0
                &&
                <div className="alert alert-danger ml-5 mr-5"> Se genera un bucle de { amountBucle }</div>
            }
            

            <div className="d-flex justify-content-center">
                
                <div className="mt-5 p-5 d-inline-flex flex-column">
                    <table className="table table-bordered">
                        <thead className="bg-success">
                            <tr>
                                <th scope="col"> i </th>
                                <th scope="col"> Yi </th>
                                <th scope="col"> Operaciones </th>
                                <th scope="col"> X(i + 1) </th>
                                <th scope="col"> ri </th>
                            </tr>
                        </thead>
                    <tbody>
                            {
                                tableRandomNumbers.map( row => (
                                    <tr className={ `table-${ ( row.i === degenerateIndex ) ? "warning" : "success" } text-center` } key={ row.i }>
                                        <th scope="row">{ row.i }</th>
                                        <td>{ row.yi }</td>
                                            <td><p className="text-primary d-inline">{ row.operaciones.left }</p><p className="text-danger d-inline">{ row.operaciones.center }</p><p className="text-primary d-inline">{ row.operaciones.right }</p></td>
                                        <td>{ row.xi }</td>
                                        {/* row.operaciones.center !== "0" && <td>{ row.ri }</td> */}
                                        <td>{ row.operaciones.center !== "0" && row.ri }</td>
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
