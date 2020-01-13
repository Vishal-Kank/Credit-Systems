import { ADD_USER, DELETE_USER, LOAD_USERS } from '../actions/types';

const initialState = {
    users: [],
    loading: true
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_USER:
            return {
                ...state,
                loading: false
            }
        case DELETE_USER:
            //localStorage.removeItem('id', payload.id);
            return {
                ...state,
                loading: false
            }
        case LOAD_USERS:
            console.log('loaded user from reducer state=>', state.users)
            console.log('loaded user from payload=>', payload)
            if (payload !== 'delete')
                return {
                    ...state,
                    users: [...payload],
                    loading: false
                }
            return {
                ...state,
                users: [...state.users],
                loading: false
            }
        default: return state;
    }
}