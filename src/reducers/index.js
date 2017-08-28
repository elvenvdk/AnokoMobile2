import { combineReducers } from 'redux';
import PartnerLibReducer from './PartnerLibReducer';
import PartnerMainLibReducer from './PartnerMainLibReducer'

export default combineReducers({
    partners: PartnerLibReducer,
    partnersMain:PartnerMainLibReducer
});


