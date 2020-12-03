import React from 'react'

const Repos = (props) => {

    return (
        <>
            <div className="card">
                <div className="card-header bg-light text=white">
                    <h3>GitHub Repos</h3>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                            props.repos.map((repo) => {
                                return (
                                    <li className="list-group-item">
                                        <a href={repo.html_url} rel="noopener noreferrer" target="_blank">{repo.name}</a>
                                        <span className="badge badge-success mx-2">{repo.stargazers_count} Stars</span>
                                        <span className="badge badge-warning mx-2">{repo.watchers_count} Watchers</span>
                                    </li>
                                )

                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Repos;