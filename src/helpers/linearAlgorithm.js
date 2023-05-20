const getPrimeNumber = ( p ) => {

    let primeNumbers = [];
    let count = 0;

    for ( let i = 1; i < p; i++ ) {
        let flag = 0;
        for ( let j = 2; j < i; j++ ) {
            if ( i % j == 0 ) {
                flag = 1;
                break;
            }
        }
        if ( i > 1 && flag == 0 ) {
            primeNumbers[ count ] = ( i );
            count += 1;
        }
    }
    return primeNumbers[ count - 1 ];

};

export const getLinearAlgorithm = ( seed, amount, k, digits ) => {
    const g = Number.isInteger( Math.log( amount ) / Math.log( 2 ) ) ? Math.log( amount ) / Math.log( 2 ) : Math.floor( Math.log( amount ) / Math.log( 2 ) ) + 1;
    const p = Math.pow( 2, g );
    const m = p;
    const c = getPrimeNumber( amount );
    const a = 1 + ( 4 * k );
    let xNumbers = [];
    let tableRandomNumbers = [];

    xNumbers[ 0 ] = seed;

    for ( let i = 1; i <= amount; i++ ) {
        
        xNumbers[ i ] = ( ( a * xNumbers[ i - 1 ] ) + c ) % m;
        const ri = xNumbers[ i ] / ( m - 1 )
        // const riDigits = ri.toString().substr( 0, digits + 2 );
        // riDigits (from: number, length?: number | undefined): string' is deprecated
        const riDigits = ri.toFixed( digits + 2 ).toString();

        tableRandomNumbers[ i - 1 ] = {
            i,
            "operaciones": `((${ a } * ${ xNumbers[ i - 1 ] }) + ${ c }) mod(${ m })`,
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

// console.log( getLinearAlgorithm( 24, 8, 62, 3 ) )

