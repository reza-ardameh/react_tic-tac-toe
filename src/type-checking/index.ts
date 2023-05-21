// types

export type Dependencies = {
    squares: (null | string)[],
     isX: boolean,
     winner: null | string,
     turn: string,
     length: number
  }

export type Params =  {
    index: number,
    dependencies: Dependencies,
    setDependencies: SetStateDependenciesAction,
    patterns: number[][]
    }

export type SetStateDependenciesAction= React.Dispatch<React.SetStateAction<Dependencies>>

export type HandleClick = (
    params : Params
    ) => void

//   enums

export enum TextColor  {
    TextRed_500 = 'text-red-500',
    TextRed_600 = 'text-red-600',
    TextBlue_500 = 'text-blue-500',
    TextWhite = 'text-white'
  }

export enum TextStatus {
    Winner = ' برنده'  ,
    Turn = ' نوبت',
    GameOver = 'بازی تمام'
  }