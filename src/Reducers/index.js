import { combineReducers } from 'redux';
import { registryFailure, registrySuccess, registrySent } from './CandidateReducers';
import { personalData, health, preferences } from './UpdateCandidateDataReducers';

export default combineReducers({
    registrySent,
    registrySuccess,
    registryFailure,
    personalData,
    health,
    preferences
});