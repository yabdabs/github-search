import { USER_GET, REPOS_GET } from '../actions/searchActions' 

const initialState = {
    userFound: false,
    userData: {},
    error: null,
    reposFound: false,
    repoData: {}
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case `${USER_GET}_PENDING` :
            return { ...state }

        case `${USER_GET}_FULFILLED`:
            console.log(action)
            return { ...state, userData: action.payload.data, userFound: true }

        case `${USER_GET}_REJECTED`:
            console.log(action)
            return { ...state, error: action.payload.response.status, userFound: false, userData: {} }

        case `${REPOS_GET}_PENDING`:
            return { ...state }
        
        case `${REPOS_GET}_FULFILLED`:
            console.log(action)
            return { ...state, repoData: action.payload.data, reposFound: true }
        
        case `${REPOS_GET}_REJECTED`:
            console.log(action)
            return { ...state, repoData: {}, reposFound: false, repoError: action.payload }

        default:
            return state
    }
}