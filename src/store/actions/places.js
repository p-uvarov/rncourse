import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionTypes';

export const addPlace = name => {
    return {
        type: ADD_PLACE,
        name
    }
};

export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    }
};

export const selectPlace = selectedKey => {
    return {
        type: SELECT_PLACE,
        selectedKey
    }
};

export const deselectedPlace = () => {
    return {
        type: DESELECT_PLACE
    }
};