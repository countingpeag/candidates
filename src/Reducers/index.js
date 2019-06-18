import { combineReducers } from 'redux';
import { registryFailure, registrySuccess, registrySent } from './CandidateReducers';
import { personalData, health, economy, preferences } from './UpdateCandidateDataReducers';

export default combineReducers({
    registrySent,
    registrySuccess,
    registryFailure,
    personalData,
    health,
    economy,
    preferences
});