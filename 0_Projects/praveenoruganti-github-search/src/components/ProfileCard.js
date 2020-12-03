import React from 'react'

const ProfileCard = (props) => {

    let { name, avatar_url, bio, html_url } = props.profile;
    return (
        <>
        <div className="card">
        <img src={avatar_url} alt="" className="img-fluid"/>
        <div className="card-body">
         <h5 className="card-title">{name}</h5>
         <p>{bio}</p>
         <a href={html_url} rel="noopener noreferrer" target="_blank" className="btn btn-success btn-sm">Profile</a>
        </div>
        </div>
        </>
    )
}


export default ProfileCard;