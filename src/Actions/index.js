import axios from 'axios';

//Sent Registry
export const SEND_REGISTRY_CANDIDATE = "SEND_REGISTRY_CANDIDATE";
export const REGISTRY_SUCCESS = "REGISTRY_SUCCESS";
export const REGISTRY_FAILURE = "REGISTRY_FAILURE";

const sendRegistry = payload => ({type:SEND_REGISTRY_CANDIDATE, payload:payload});
const registrySuccess = payload => ({type:REGISTRY_SUCCESS, payload:payload});
const registryFailure = payload => ({type:REGISTRY_FAILURE, payload:payload});

export const sentRegistryCandidate = payload => {
    return dispatch => {
        dispatch(sendRegistry(payload));
        axios.post("http://localhost:8080/nucleus/candidates", payload)
        .then( ({data}) => {
            console.log(data);
        })
        .catch((error)=>{
            console.log(error);
        })
    };
};

//Update candidate Data (State)
export const UPDATE_PERSONAL_DATA = "UPDATE_PERSONAL_DATA";
export const UPDATE_HEALTH = "UPDATE_HEALTH";
export const UPDATE_PREFERENCES = "UPDATE_PREFERENCES";

const savePersonalData = payload => ({type:UPDATE_PERSONAL_DATA, payload:payload});
const saveHealth = payload => ({type:UPDATE_HEALTH, payload:payload});
const savePreferences = payload => ({type:UPDATE_PREFERENCES, payload:payload});

export const updatePeronsalData = payload => {
    return dispatch => {
        dispatch(savePersonalData(payload));
    };
};

export const updateHealth = payload => {
    return dispatch => {
        dispatch(saveHealth(payload));
    };
};

export const updatePreferences = payload => {
    return dispatch => {
        dispatch(savePreferences(payload));
    };
};

export const resetCandidateObject = payload => {
    return dispatch => {
        dispatch(savePersonalData(payload));
        dispatch(saveHealth(payload));
        dispatch(savePreferences(payload));
    };
};