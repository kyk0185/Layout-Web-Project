import { ADD_ITEM } from '../actions';
import { combineReducers } from 'redux';

//const defaultState = 
//{
  //  items: JSON.parse(localStorage.getItem('items')) || []
//};
  
function addItem (state = [], action) {
    switch (action.type) {
        case ADD_ITEM:
                return [
                    ...state, 
                    {
                        filename: action.data['filename'],
                        filenameId: action.data['filenameId'],
                        sidoCode: action.data['sidoCode']
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