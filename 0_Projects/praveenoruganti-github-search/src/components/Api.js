import React, { useState } from 'react'
import Profile from './Profile'
import Repos from './Repos'
import Axios from 'axios'

export default function API() {
    const [userName, setUserName] = useState('');
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState(null);
    const clientId = 'f4f7bad90be86f399ae3';
    const clientSecret = 'd4cd835a352746f95690aebe11ccb73879a250dd';


    const searchUser = (e) => {
        e.preventDefault();
        searchProfile();
        searchRepos();
    }

    const searchProfile = () => {

        Axios.get(`https://api.github.com/users/${userName}?clientId=${clientId}
                &clientSecret=${clientSecret}`)
            .then((response) => {
                setProfile(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }

    const searchRepos = () => {
        Axios.get(`https://api.github.com/users/${userName}/repos?sort=created&clientId=${clientId}
        &clientSecret=${clientSecret}`)
            .then((response) => {
                setRepos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>          
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <h3>Praveen Oruganti GitHub User Search</h3>
                            </div>
                            <div className="card-body">
                                <form className="form-inline" onSubmit={searchUser}>
                                    <div className="form-group">
                                        <input size="40" type="text" className="form-control" value={userName}
                                            placeholder="User Name" onChange={e => setUserName(e.target.value)} />
                                    </div>
                                    <div>
                                        <input type="submit" value="Search" className="btn btn-secondary btn-sm mx-2" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        {
                            profile != null ? <Profile profile={profile} /> : ''
                        }
                    </div>
                </div>

            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        {
                            repos != null ? <Repos repos={repos} /> : ''
                        }
                    </div>
                </div>

            </div>
        </>
    )
}
