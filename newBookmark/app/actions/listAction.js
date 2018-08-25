import { LIST_OF_BOOKMARKS } from './types';

export const gatherListOfBookmarks = (list) => {
    console.log('action: ', list)
    return {
        type: LIST_OF_BOOKMARKS,
        payload: list
    };
};