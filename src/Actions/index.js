import axios from 'axios';

export const SEND_REGISTRY_CANDIDATE = "SEND_REGISTRY_CANDIDATE";
export const REGISTRY_SUCCESS = "REGISTRY_SUCCESS";
export const REGISTRY_FAILURE = "REGISTRY_FAILURE";

const sendRegistry = payload => ({type:SEND_REGISTRY_CANDIDATE, payload:payload});
const registrySuccess = payload => ({type:REGISTRY_SUCCESS, payload:payload});
const registryFailure = payload => ({type:REGISTRY_FAILURE, payload:payload});

export const sentRegistryCandidate = payload => {
    return dispatch => {
        dispatch(sendRegistry(payload));
    };
};