//  calculat the winner
export const calculatWinner = ( patterns: number[][],squares: (null | string)[] ) => {

    for (let i = 0; i < patterns.length; i++) {
          let [a, b, c] = patterns[i];
        if( squares[a] && squares[a] === squares[b]  && squares[a] === squares[c]  )
          return true
    }
   
        return false
    }  