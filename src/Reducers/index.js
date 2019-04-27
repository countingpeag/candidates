import { combineReducers } from 'redux';
import { registryFailure, registrySuccess, registrySent } from './CandidateReducers';

export default combineReducers({
    registrySent,
    registrySuccess,
    registryFailure
});