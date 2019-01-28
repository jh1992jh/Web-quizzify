import { combineReducers } from 'redux';

import questionReducer from './questionReducer';
import learnReducer from './learnReducer';

export default combineReducers({
    questions: questionReducer,
    learn: learnReducer
});