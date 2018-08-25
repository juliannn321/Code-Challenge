import { LIST_OF_BOOKMARKS } from '../actions/types';

const INITIAL_STATE = {
    dataSource: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LIST_OF_BOOKMARKS:
            console.log('reducer: ', action.payload);
            return { ...state, dataSource: [...state.dataSource, action.payload] }
        default:
            return state;
    };
};