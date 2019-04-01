import { LOAD_USER } from '../constants/action-types';
const initialState = {
    currentUser: {
        email: '',
        userName: '',
        password: '',
    },
    game: {
        key: '',
        questions: [],
        playerOneScore: 0,
        playerTwoScore: 0
    }
}

function rootReducer(state = initialState, action) {
    if (action.type === LOAD_USER) {
        return Object.assign({}, state, {
            currentUser: {
                email: action.payload.email,
                userName: action.payload.userName,
                password: action.payload.password
            }
        })
    }
    return state;
}

export default rootReducer;