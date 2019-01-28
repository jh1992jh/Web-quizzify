import { CHOOSE_CATEGORY } from './types';

export const chooseCategory = category => dispatch => {
    console.log(category)
    dispatch({
        type: CHOOSE_CATEGORY,
        payload: category
    })
}