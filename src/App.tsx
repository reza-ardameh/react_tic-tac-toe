import { useState } from 'react'
import { SquareWrapper, Square } from './components'
import { patterns } from './utils'
import { calculatWinner } from './lib/calculatWinner'
import { 
  type Dependencies,
  type HandleClick,
  type Params,
  type SetStateDependenciesAction,
  TextColor,
  TextStatus
} from './types'

/**
 * App component
 *
 * @export
 * @return {*}  {JSX.Element}
 */
export default function App(): JSX.Element {

  // states
   let [dependencies, setDependencies] = useState<Dependencies>({
     squares: Array(9).fill(null),
     isX: true,
     winner: null,
     turn: 'X',
     length: 0
   })

  //  destructring the dependencies state
   const {
    squares,
    isX,
    winner,
    turn,
    length
  } = dependencies


/**
 * reset the dependencies state
 *
 * @param {SetStateDependenciesAction} setDependencies
 */
const handleReset = (setDependencies: SetStateDependenciesAction) => {
  setDependencies(() => ({ 
      squares: Array(9).fill(null),
      isX: true,
      winner: null,
      turn: 'X',
      length: 0
    }))
   }

/**
 * handle click users
 *
 * @param {Params} {
 *   index,
 *   setDependencies,
 *   patterns
 *  }
 */
const handleClick: HandleClick = ({
  index,
  setDependencies,
  patterns
 }: Params
  ) => {

    // check The winner has already been determined
 if(winner) {
   
   return
 }

//  check Repeated selection
 if(squares[index]) {
  
  return
}

squares[index] = turn

setDependencies((state: Dependencies) =>
({ ...state, squares: squares, length: length +1})
)    

//  calculatWinner
let calc = calculatWinner( patterns, squares )

 // check There is a winner
if(calc) {
  setDependencies((state: Dependencies) =>
   ({ ...state, winner: squares[index]})
   )  

  return
}

// appointment
setDependencies((state: Dependencies) =>
 ({ ...state, isx: !isX , turn: turn === 'X' ? 'O' : 'X'})
 )

}  

  // status the game
   let status = winner ? winner + TextStatus.Winner : 
   length === squares.length ? TextStatus.GameOver : turn + TextStatus.Turn

  return (
    <main className='main' >
        <div>
        <SquareWrapper>
        {
          // render squares
                squares.map(
                  (square: null | string, index: number) => 
                 <Square 
                    key={index} 
                    index={index} 
                    value={squares[index]}
                    dependencies={dependencies}
                    setDependencies={setDependencies}
                    patterns={patterns} 
                    handleClick={handleClick} 
                  />
                 )
            }
        </SquareWrapper>
        </div>
      <div className='wrapper'>
      <div>
          <p className={`status-text
            ${status === TextStatus.GameOver ? TextColor.TextRed_600 : TextColor.TextWhite }
          `}>{status}</p>
        </div>
        <div>
          <button 
            onClick={() => handleReset( setDependencies )} 
            className='reset-btn'
            >شروع مجدد</button>
        </div>
      </div>
    </main>
  )
}