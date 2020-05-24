import { ADD_ITEM } from '../actions';
import { combineReducers } from 'redux';

function addItem(state = [], action) {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {
                    filename: action.data['filename'],
                }
            ]
        default:
            return state;
    }
}
const rootReducers = combineReducers({
    addItem
});

export default rootReducers;