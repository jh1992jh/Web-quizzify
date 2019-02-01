import { CHOOSE_CATEGORY } from '../actions/types';
import { categories } from '../categories';

const initialState = {
    categories: categories,
    category: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CHOOSE_CATEGORY: 
            return {
                ...state,
                category: state.categories.filter(category => category.categoryTitle === action.payload)
            }
        default:
            return {
                ...state
            }
    }
}