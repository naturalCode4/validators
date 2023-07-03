import React from "react"

function Member({member}) {
    return (
        <div>
            <p className='member_name'>{member.name}</p>
            <img src={member.image} className='member_image'/>
            <p>{member.description}</p>
            <br></br>
        </div>
    )
}

export default Member