import { createStore, applyMiddleware} from 'redux'

let initialstate = {
    month: 0, 
    day: 0,
}

const CalendarReduser = (state = initialstate, action) => {
    switch (action.type){
        case 'ADD_CALENDAR_MONTH':
            return {
                ...state,
                month: action.month,
            }
        case 'ADD_CALENDAR_DAY':
            return {
                ...state,
                day: action.day,
            }
        default: 
            return state
    }
}

export const SetCalendarMonth = (month) => ({ type: 'ADD_CALENDAR_MONTH', month})
export const SetCalendarDay = (day) => ({ type: 'ADD_CALENDAR_DAY', day})

let store = createStore(CalendarReduser, applyMiddleware());

export default store;