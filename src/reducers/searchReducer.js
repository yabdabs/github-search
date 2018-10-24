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
            return { ...state, userData: action.payload.data, userFound: true }

        case `${USER_GET}_REJECTED`:
            return { ...state, error: action.payload.response.status, userFound: false, userData: {}, reposFound: false, repoData: {} }

        case `${REPOS_GET}_PENDING`:
            return { ...state }
        
        case `${REPOS_GET}_FULFILLED`:
            return { ...state, repoData: action.payload.data, reposFound: true }
        
        case `${REPOS_GET}_REJECTED`:
            return { ...state, repoData: {}, reposFound: false, repoError: action.payload }

        default:
            return state
    }
}