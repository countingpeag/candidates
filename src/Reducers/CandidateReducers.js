import { SEND_REGISTRY_CANDIDATE, REGISTRY_SUCCESS, REGISTRY_FAILURE } from '../Actions';

export const registryFailure = (state={}, action) => {
    switch(action.type){
        case REGISTRY_FAILURE:
            return action.payload;
        default:
            return state;
    }
};

export const registrySuccess = (state={}, action) => {
    switch(action.type){
        case REGISTRY_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

export const registrySent = (state={}, action) => {
    switch(action.type){
        case SEND_REGISTRY_CANDIDATE:
            return action.payload;
        default:
            return state;
    }
};