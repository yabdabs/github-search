import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { searchActions } from '../actions/searchActions'

class SearchUser extends Component {

    submitAction = (form) => {
        
        const { getUser, getRepos } = this.props

        getUser(form.username)
            .then( (res) => {
                getRepos(form.username)
            })
    }

    render() {

        const { handleSubmit } = this.props
        const onSubmit = handleSubmit(this.submitAction)

        return (

            <Fragment>

                <h1>Github Search</h1>

                <form id="search-user-form" className="form" onSubmit={ onSubmit }>

                    <div className='form-panel'>

                        <div className="fields">

                            <Field
                                name='username'
                                placeholder='User Name'
                                component="input"
                            />

                            <button 
                                className="form-button"
                                type="submit"
                            >Submit
                            </button>

                        </div>

                    </div>

                </form>

            </Fragment>

        )

    }

}


let SearchUserForm = connect(null, searchActions)(SearchUser)

export default reduxForm({
    form: 'search-user-form'
})(SearchUserForm)