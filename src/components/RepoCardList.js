import React, { Fragment } from 'react'

const RepoCardList = (props) => {

    const { repoData } = props

    const cardList = (repo) => {

        return (

            <li className="card">

                <div className="card-header">
                    { repo.name }
                </div>

                <div className="card-body">
                    <ul>
                        <li>{ repo.desription }</li>
                        <li>{ repo.url }</li>
                        <li>{ repo.stargazers_count } stars</li>
                        <li>{ repo.forks } forks</li>
                        <li>{ repo.open_issues_count } open issues</li>
                    </ul>
                </div>

            </li>
        )

    }

    return (

        <Fragment>

            <h2> Repositories </h2>

            <ul className='card-list'>
                {
                    repoData.map( (repo) => (
                        cardList(repo)
                    )
                )}
            </ul>

        </Fragment>

    )
}

export default RepoCardList