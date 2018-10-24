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
                        <li>{ repo.stars } stars</li>
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

            <div className='card-list'>
                <ul>
                    {
                        repoData.map( (repo) => (
                            cardList(repo)
                        )
                    )}
                </ul>
            </div>

        </Fragment>

    )
}

export default RepoCardList