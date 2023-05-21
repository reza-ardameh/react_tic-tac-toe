import { useState } from 'react'
import { SquareWrapper, Square } from './components'
import { patterns } from './utils'
import { calculatWinner } from './helpers'
import { 
  type Dependencies,
  type HandleClick,
  type Params,
  type SetStateDependenciesAction,
  TextColor,
  TextStatus
} from './type-checking'

// App component
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

  //  reset the dependencies state
const handleReset = (setDependencies: SetStateDependenciesAction) => {
  setDependencies(() => ({ 
      squares: Array(9).fill(null),
      isX: true,
      winner: null,
      turn: 'X',
      length: 0
    }))
   }

    //  handle click users
const handleClick: HandleClick = ({
  index,
  dependencies,
  setDependencies,
  patterns
 }: Params
  ) => {

 if(winner) {
   
   return
 }

 if(squares[index]) {
  
  return
}

squares[index] = turn

setDependencies((state: Dependencies) =>
({ ...state, length: length +1})
);

setDependencies((state: Dependencies) =>
({ ...state, squares: squares})
)    

let calc = calculatWinner( patterns, squares )

if(calc) {
  setDependencies((state: Dependencies) =>
   ({ ...state, winner: squares[index]})
   )  

  return
}

setDependencies((state: Dependencies) =>
 ({ ...state, turn: turn === 'X' ? 'O' : 'X' })
 )


setDependencies((state: Dependencies) =>
 ({ ...state, isx: !isX })
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