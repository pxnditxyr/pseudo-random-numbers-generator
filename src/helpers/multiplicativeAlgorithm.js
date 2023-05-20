export const getMultiplicativeAlgorithm = ( seed, amount, k, digits ) => {

    const g = ( Number.isInteger( Math.log( amount ) / Math.log( 2 ) ) ? Math.log( amount ) / Math.log( 2 ) : Math.floor( Math.log( amount ) / Math.log( 2 ) ) + 1 ) + 2;
    const p = Math.pow( 2, g );
    const m = p;
    const a = 3 + ( 8 * k );
    let xNumbers = [];
    let tableRandomNumbers = [];

    xNumbers[ 0 ] = seed;

    for ( let i = 1; i <= amount; i++ ) {
        
        xNumbers[ i ] = ( a * xNumbers[ i - 1 ] ) % m;
        const ri = xNumbers[ i ] / ( m - 1 )
        // const riDigits = ri.toString().substr( 0, digits + 2 );
        // riDigits (from: number, length?: number | undefined): string' is deprecated
        const riDigits = ri.toFixed( digits + 2 ).toString();

        tableRandomNumbers[ i - 1 ] = {
            i,
            "operaciones": `(${ a } * ${ xNumbers[ i - 1 ] }) mod(${ m })`,
            "xi": xNumbers[ i ],
            "ri": riDigits,
        };
    }
    const copyOfInitialElement = { ...tableRandomNumbers[ 0 ], "i": tableRandomNumbers.length + 1 }
    tableRandomNumbers[ tableRandomNumbers.length ] = copyOfInitialElement;

    return {
        tableRandomNumbers,
        g,
        a,
    };
}
