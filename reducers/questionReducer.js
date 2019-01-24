import { CORRECT_ANSWER, WRONG_ANSWER, CHOSEN_ANSWER, RESET_GAME } from '../actions/types';
import {questions} from '../questions';

const initialState = {
    questions: questions,
    correctAnswers: 0,
    wrongAnswers: 0,
    answers: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CORRECT_ANSWER: 
            return {
                ...state,
                correctAnswers: state.correctAnswers + 1
            }
        case WRONG_ANSWER: 
            return {
                ...state,
                wrongAnswers: state.wrongAnswers + 1
            }
        case CHOSEN_ANSWER:
            return {
                ...state,
                answers: state.answers.concat(action.payload)
            }
        case RESET_GAME:
            return initialState;
        default:
            return {
                ...state
            }
    }
}