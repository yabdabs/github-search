import axios from 'axios'

export const USER_GET = 'USER_GET'
export const REPOS_GET = 'REPOS_GET'

export const searchActions = {
    getUser: (username) => {
        return {
            type: USER_GET,
            payload: axios.get(`https://api.github.com/users/${username}`)

        }
    },
    getRepos: (username) => {
        return {
            type: REPOS_GET,
            payload: axios.get(`https://api.github.com/users/${username}/repos`)
        }
    }
}