import React from 'react'

const Badge = (props) => {

    const {  avatar_url, name, followers, following } = props.badgeInfo
    
    return (

        <div className='userBadge'>
			<img src={avatar_url} alt="Avatar"/>
            <p>Name: {name}</p>
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
        </div>

    )

}

export default Badge