import { type Params, HandleClick, TextColor } from "../../type-checking"

type squrePartialParams = {
  value: string | null,
  handleClick: HandleClick
}
type squreParams = squrePartialParams & Params

const turnX = 'X'

export default function Square({ 
  value,
  index,
  dependencies,
  setDependencies,
  patterns,
  handleClick
 }: squreParams
): JSX.Element {
    
  return (
    <div className={`square-value
      ${value === turnX ? TextColor.TextRed_500 : TextColor.TextBlue_500 }
      `} 
        onClick={() =>
          handleClick({index, dependencies, setDependencies, patterns})}>
      {value}
    </div>
  )
}
