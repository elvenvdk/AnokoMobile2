import {
    EVENT_SELECT
} from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EVENT_SELECT:
            return action.data;
        default:
            return state;
    }
}