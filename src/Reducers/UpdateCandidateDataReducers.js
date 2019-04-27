import { UPDATE_PERSONAL_DATA, UPDATE_HEALTH, UPDATE_PREFERENCES } from '../Actions';

export const personalData = (state={}, action) => {
    switch(action.type){
        case UPDATE_PERSONAL_DATA:
            return action.payload;
        default:
            return state;
    }
};

export const health = (state={}, action) => {
    switch(action.type){
        case UPDATE_HEALTH:
            return action.payload;
        default:
            return state;
    }
};

export const preferences = (state={}, action) => {
    switch(action.type){
        case UPDATE_PREFERENCES:
            return action.payload;
        default:
            return state;
    }
};