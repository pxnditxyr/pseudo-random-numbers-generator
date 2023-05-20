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

export const getMiddleSquare = ( seed, amount ) => {
    
    let randomNumbers = [];
    randomNumbers[ 0 ] = seed;
    let tableRandomNumbers = [];
    const seedStr = seed.toString();
    const digits = seedStr.length;

    for ( let i = 1; i <= amount; i++ ) {
        const square = Math.pow( randomNumbers[ i - 1 ], 2 );
        const middleNumber = getMiddleNumber( square, digits );
        // const randomNumber = parseInt( middleNumber.center ) * Math.pow( 10, -digits );

        randomNumbers[ i ] = parseInt( middleNumber.center );
        tableRandomNumbers[ i - 1 ] = {
            i,
            "yi": square,
            "operaciones": middleNumber,
            "xi": middleNumber.center,
            "ri": "0." + middleNumber.center,
        };

        if ( middleNumber.center === "0" )
            break;
    }

    const periodRange = getPeriod( randomNumbers );
    let degenerate = {
        "degenerateIndex": -1,
        "amountBucle": 0,
    }

    if ( periodRange === -1 ) 
        degenerate = getDegenerate( randomNumbers );

    if ( degenerate.degenerateIndex === -1 && randomNumbers[ randomNumbers.length - 1 ] === 0 ) {
        degenerate.degenerateIndex = randomNumbers.length - 1;
    }

    return {
        tableRandomNumbers,
        info: {
            degenerate,
            periodRange,
        }
    };
}
