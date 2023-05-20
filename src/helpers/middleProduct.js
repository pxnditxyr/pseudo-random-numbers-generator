const getMiddleNumber = ( number, digits ) => {
    
    if ( number !== 0 ) {
        let amountSides = 0;
        let numberStr = number.toString();
        let digitsOfNumber = numberStr.length;

        if ( ( ( digitsOfNumber % 2 === 0 ) || ( digits % 2 === 0 ) ) && !( ( digitsOfNumber % 2 === 0 ) && ( digits % 2 === 0 ) ) ) {
            numberStr = "0" + numberStr;
            digitsOfNumber += 1;
        }
        while ( ( amountSides * 2 ) + digits !== digitsOfNumber )
            amountSides += 1;

        const left   = numberStr.substr( 0, amountSides );
        const center = numberStr.substr( amountSides, digits );
        const right  = numberStr.substr( digits + amountSides, amountSides );

        return {
            left,
            center,
            right,
        };
    } else {
        return {
            "left": "0",
            "center": "0",
            "right": "0",
        };
    };
};

const getPeriod = ( randomNumbers ) => {

    for ( let i = 2; i < randomNumbers.length; i++ ) {
        if ( randomNumbers[ i ] === randomNumbers[ 1 ] ) {
            if ( i < randomNumbers.length - 1 && randomNumbers[ i + 1 ] === randomNumbers[ 2 ] ) {
                return i - 1;
            }
        }
    }

    return -1;

};
const getDegenerate = ( randomNumbers ) => {

    let degenerateIndex = -1;
    let amountBucle = 0;

    for ( let i = 1; i < randomNumbers.length; i++ ) {
        for ( let j = 2; j < randomNumbers.length; j++ ) {
            if ( i != j && randomNumbers[ i ] !== 0 && randomNumbers[ j ] === randomNumbers[ i ] ) {
                degenerateIndex = j;
                if ( i + 1 < randomNumbers.length && j + 1 <= randomNumbers.length && randomNumbers[ i + 1 ] === randomNumbers[ j + 1 ] ) {
                    i += 1;
                    j += 1;
                    amountBucle += 1;
                    while ( i < randomNumbers.length && j <= randomNumbers.length && i != j && randomNumbers[ i ] === randomNumbers[ j ] && randomNumbers[ i ] !== randomNumbers[ degenerateIndex ] ) {
                        amountBucle += 1;
                        i += 1;
                        j += 1;
                    }
                }
                return {
                    degenerateIndex,
                    amountBucle,
                }
            }
        }
    }
    return {
        degenerateIndex,
        amountBucle,
    }
};

export const getMiddleProduct = ( seed1, seed2, amount ) => {
    
    let randomNumbers = [];
    let xNumbers = [];
    let tableRandomNumbers = [];
    const digits = seed1.toString().length;
    randomNumbers[ 0 ] = seed1;

    xNumbers[ 0 ] = seed1;
    xNumbers[ 1 ] = seed2;

    for ( let i = 1; i <= amount; i++ ) {
        const product = xNumbers[ i ] * xNumbers[ i - 1 ];
        const middleNumber = getMiddleNumber( product, digits );
        xNumbers[ i + 1 ] = parseInt( middleNumber.center );
        tableRandomNumbers[ i - 1 ] = {
            i,
            "yi": `(${ xNumbers[ i ] }) * (${ xNumbers[ i - 1 ] })`,
            "operaciones": middleNumber,
            "xi": middleNumber.center,
            "ri": "0." + middleNumber.center,
        };

        if ( middleNumber.center === "0" )
            break;
    }

    const periodRange = getPeriod( xNumbers );
    let degenerate = {
        "degenerateIndex": -1,
        "amountBucle": 0,
    }

    if ( periodRange === -1 ) 
        degenerate = getDegenerate( xNumbers );

    if ( degenerate.degenerateIndex === -1 && xNumbers[ xNumbers.length - 1 ] === 0 ) {
        degenerate.degenerateIndex = xNumbers.length - 1;
    }

    return {
        tableRandomNumbers,
        info: {
            degenerate,
            periodRange,
        }
    };
}
