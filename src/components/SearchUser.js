import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { searchActions } from '../actions/searchActions'

class SearchUser extends Component {

    submitAction = (form) => {
        this.props.getUser(form.username)
            .then( (res) => {
                this.props.getRepos(form.username)
            })
    }

    render() {

        const { handleSubmit } = this.props
        const onSubmit = handleSubmit(this.submitAction)

        return (

            <form id="search-user-form" onSubmit={ onSubmit }>
                
                <Field
                    name='username'
                    placeholder='User Name'
                    component="input"
                />

                <button 
                    type="submit"
                >Submit
                </button>

            </form>

        )

    }

}


let SearchUserForm = connect(null, searchActions)(SearchUser)

export default reduxForm({
    form: 'search-user-form'
})(SearchUserForm)