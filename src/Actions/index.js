import axios from 'axios';

//Sent Registry
export const SEND_REGISTRY_CANDIDATE = "SEND_REGISTRY_CANDIDATE";
export const REGISTRY_SUCCESS = "REGISTRY_SUCCESS";
export const REGISTRY_FAILURE = "REGISTRY_FAILURE";

export const sendRegistry = payload => ({type:SEND_REGISTRY_CANDIDATE, payload:payload});
export const registrySuccess = payload => ({type:REGISTRY_SUCCESS, payload:payload});
export const registryFailure = payload => ({type:REGISTRY_FAILURE, payload:payload});

export const sentRegistryCandidate = payload => {
    return dispatch => {
        dispatch(sendRegistry(true));
        axios.post("http://localhost:8080/nucleus/candidates", payload)
        .then( ({data}) => {
            dispatch(registrySuccess(data));
            dispatch(sendRegistry(false));
            dispatch(registryFailure(false));
        })
        .catch((error)=>{
            console.log(error);
            dispatch(registryFailure(true));
            dispatch(registrySuccess(false));
            dispatch(sendRegistry(false));
            alert("Hubo un problema con el servidor, porfavor intente mas tarde.")
        })
    };
};

//Update candidate Data (State)
export const UPDATE_PERSONAL_DATA = "UPDATE_PERSONAL_DATA";
export const UPDATE_HEALTH = "UPDATE_HEALTH";
export const UPDATE_ECONOMY = "UPDATE_ECONOMY";
export const UPDATE_PREFERENCES = "UPDATE_PREFERENCES";

const savePersonalData = payload => ({type:UPDATE_PERSONAL_DATA, payload:payload});
const saveHealth = payload => ({type:UPDATE_HEALTH, payload:payload});
const saveEconomy = payload => ({type:UPDATE_ECONOMY, payload:payload});
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

export const updateEconomy = payload => {
    return dispatch => {
        dispatch(saveEconomy(payload));
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
        dispatch(saveEconomy(payload));
        dispatch(savePreferences(payload));
    };
};