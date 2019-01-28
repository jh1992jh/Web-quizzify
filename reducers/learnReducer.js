import { CHOOSE_CATEGORY } from '../actions/types';

const initialState = {
    category: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CHOOSE_CATEGORY: 
            return {
                ...state,
                category: action.payload
            }
        default:
            return {
                ...state
            }
    }
}