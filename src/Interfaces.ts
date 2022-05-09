interface ISolution{
    solution: string
}
interface IGuess{
    key: string;
    color: string;
}

interface IWordle{
    turn: number,
    currentGuess: string,
    solution?:string,
    guesses: Array<Array<IGuess>>,
    history: Array<string>,
    isCorrect: Boolean
}

export type {
    // not exporting IWords | INumbers
    ISolution,
    IGuess,
    IWordle,
  }