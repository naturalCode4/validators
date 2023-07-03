import React from 'react'
import { teamdata } from '../utility/teamdata'
import Member from './Member'

function Team () {
    return (
        <div id="team">
            <h2>Meet The Valid8rs</h2>
            <div id="members">
                {teamdata.map(member => {
                    return (
                        <Member
                            member={member}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Team