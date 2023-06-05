import {
  TextColor,
  squreParams
} from "../../types"

const turnX = 'X'

/**
 * square component
 *
 * @export
 * @param {squreParams} {
 *   value,
 *   index,
 *   dependencies,
 *   setDependencies,
 *   patterns,
 *   handleClick
 * }
 * @return {*}  {JSX.Element}
 */
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
      ${value === turnX ? TextColor.TextRed_500 : TextColor.TextBlue_500}
      `}
      onClick={() =>
        handleClick({
          index,
          dependencies,
          setDependencies,
          patterns
        })}>
      {value}
    </div>
  )
}
