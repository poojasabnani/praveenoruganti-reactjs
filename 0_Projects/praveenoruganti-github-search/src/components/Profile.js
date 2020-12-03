import React from 'react'
import ProfileCard from './ProfileCard'
import ProfileCardDetails from './ProfileCardDetails'

const Profile = (props) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                        {
                            Object.keys(props).length !== 0 && <ProfileCard profile={props.profile} />

                        }


                    </div>

                    <div className="col-md-9">
                    {
                        Object.keys(props).length !== 0 && <ProfileCardDetails profile={props.profile} />

                    }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile;
