import {
    EVENT_SELECT
} from './types';

export const selectEvent = (eventId) => {
    return {
        type: EVENT_SELECT,
        data: eventId
    }
};