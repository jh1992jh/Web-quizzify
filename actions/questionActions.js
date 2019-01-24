import { CORRECT_ANSWER, WRONG_ANSWER, CHOSEN_ANSWER, RESET_GAME } from './types';

export const correctAnswer = () => dispatch => {
    dispatch({
        type: CORRECT_ANSWER
    })
}

export const wrongAnswer = () => dispatch => {
    dispatch({
        type: WRONG_ANSWER
    })
}

export const chosenAnswer = answer => dispatch => {
    dispatch({
        type: CHOSEN_ANSWER,
        payload: answer
    })
}

export const resetGame = () => dispatch => {
    dispatch({
        type: RESET_GAME
    })
}