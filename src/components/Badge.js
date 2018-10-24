import React from 'react'

const Badge = (props) => {

    const {  avatar_url, name, followers, following } = props.badgeInfo
    
    return (

        <div className='user-badge'>
			<img src={avatar_url} alt="Avatar" className="avatar"/>

            <div className='badge-info'>
                <h3>{name}</h3>
                <p>Followers: {followers}</p>
                <p>Following: {following}</p>
            </div>
        </div>

    )

}

export default Badge