import { combineReducers } from 'redux';
import PartnerLibReducer from './PartnerLibReducer';
import PartnerMainLibReducer from './PartnerMainLibReducer';
import EventLibFeatReducer from './EventLibFeatReducer';
import EventLibMainReducer from './EventLibMainReducer';

export default combineReducers({
    partners: PartnerLibReducer,
    partnersMain:PartnerMainLibReducer,
    EventFeat: EventLibFeatReducer,
    EventMain: EventLibMainReducer
});


